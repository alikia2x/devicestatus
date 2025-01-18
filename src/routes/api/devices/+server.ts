import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { redis } from "$lib";
// Endpoint to list all devices
export const GET: RequestHandler = async ({ url }) => {
    const keys = await redis.keys('device:*');
    const devices = await Promise.all(keys.map(async (key) => {
        const deviceInfo = await redis.get(key);
        if (!deviceInfo) {
            return;
        }
        return { name: key.split(':')[1], info: JSON.parse(deviceInfo) };
    }));

    return new Response(JSON.stringify(devices), { status: 200 });
};