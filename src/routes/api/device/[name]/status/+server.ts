import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { redis } from "$lib";
import { AUTH_TOKEN } from "$env/static/private";
import type { DeviceStatusReceived, DeviceStatus } from "$lib/index";
export const PUT: RequestHandler = async ({ url, params, request }) => {
	const deviceName = params.name;
	// bearer token
	const bearerToken = request.headers.get("Authorization")?.split(" ")[1];
	if (!bearerToken) throw error(401, "No Bearer Token Provided");
    const token = bearerToken;
	// Validate token
	if (token !== AUTH_TOKEN) {
		throw error(403, "Unauthorized");
	}

	// Read device info from request body
	const deviceStatus: DeviceStatusReceived = await request.json();
	const actionType = deviceStatus.action;
	const isCloseAction = actionType === "close";

	const deviceInfo: DeviceStatus = {
		packageNameOpening: isCloseAction ? null : deviceStatus.packageName,
		lastUpdateAt: Date.now(),
		batteryLevel: deviceStatus.batteryLevel,
		isCharging: deviceStatus.isCharging,
		windowTitle: deviceStatus.windowTitle,
		url: deviceStatus.url,
	};

	// Update the device information in Redis
	await redis.set(`device:${deviceName}`, JSON.stringify(deviceInfo));

	if (!deviceStatus.expiresInMinutes) {
		throw error(400, "ExpiresInMinutes is required");
	}

	const expiresIn = deviceStatus.expiresInMinutes * 60; // Convert minutes to seconds
	await redis.expire(`device:${deviceName}`, expiresIn);

	return new Response(
		JSON.stringify({ message: "Device status updated successfully" }),
		{ status: 200 }
	);
};

// Endpoint to get information of a specified device
export const GET: RequestHandler = async ({ params }) => {
	const deviceName = params.name;
	const deviceInfo = await redis.get(`device:${deviceName}`);

	if (!deviceInfo) {
		throw error(404, "Device not found");
	}

	return new Response(deviceInfo, { status: 200 });
};
