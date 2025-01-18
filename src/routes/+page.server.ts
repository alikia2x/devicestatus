import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./devices/$types";
import { redis } from "$lib";
import type { DeviceStatus, DeviceData } from "$lib";

export const load: PageServerLoad = async () => {
    try {
        const keys = await redis.keys('device:*');
        const devices = await Promise.all(keys.map(async (key) => {
            const deviceInfo = await redis.get(key);
            if (!deviceInfo) {
                return;
            }
            const status = JSON.parse(deviceInfo) as DeviceStatus;
            return { 
                name: key.split(':')[1], 
                status 
            };
        }));

        return {
            devices: devices.filter((d): d is DeviceData => !!d)
        };
    } catch (err) {
        throw error(500, 'Failed to fetch device status');
    }
};
