export * from './server/index';

export type actionType = "open" | "close" | null;

export interface DeviceStatus {
	packageNameOpening: string | null;
	lastUpdateAt: number;
	batteryLevel: number | null;
	isCharging: boolean | null;
}

export interface DeviceStatusReceived {
	action: actionType;
	packageName: string | null;
	batteryLevel: number | null;
	isCharging: boolean | null;
	expiresInMinutes: number;
}

export interface DeviceData {
    name: string;
    status: DeviceStatus;
}
