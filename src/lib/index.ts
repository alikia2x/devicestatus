export * from './server/index';

export type actionType = "open" | "close" | null;

export interface DeviceStatus {
	packageNameOpening: string | null | undefined;
	lastUpdateAt: number;
	batteryLevel: number | undefined;
	isCharging: boolean | undefined;
	windowTitle: string | undefined;
	url: string | undefined;
}

export interface DeviceStatusReceived {
	action: actionType;
	packageName: string | null | undefined;
	batteryLevel: number | undefined;
	isCharging: boolean | undefined;
	expiresInMinutes: number;
	windowTitle: string | undefined;
	url: string | undefined;
}

export interface DeviceData {
    name: string;
    status: DeviceStatus;
}
