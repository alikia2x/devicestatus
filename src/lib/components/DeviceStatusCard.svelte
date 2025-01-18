<script lang="ts">
	import getAppName from "$lib/utils/getAppName";
    import getDescription from "$lib/utils/getDescription";
    import type { DeviceData } from "$lib";

	export let device: DeviceData;
	export let dayjs;

	function formatBatteryLevel(level: number | null) {
		if (level == null) {
			return "未知";
		}
		return `${(level * 100).toFixed(0)}%`;
	}

	function formatBatteryStatus(isCharging: boolean | null) {
		if (isCharging == null) {
			return "未知";
		}
		return isCharging ? "充电中" : "未充电";
	}
</script>

<div class="bg-zinc-200 dark:bg-zinc-900 rounded-lg shadow p-4">
	<h2 class="text-lg font-semibold mb-2">{device.name}</h2>
	<div class="space-y-1 text-sm">
		{#if device.status.packageNameOpening}
			<div class="flex justify-between">
				<span>正在使用:</span>
				<span>{getAppName(device.status.packageNameOpening)}</span>
			</div>
		{/if}
		<div class="flex justify-between">
			<span>电池电量:</span>
			<span>{formatBatteryLevel(device.status.batteryLevel)}</span>
		</div>
		<div class="flex justify-between">
			<span>充电状态:</span>
			<span>{formatBatteryStatus(device.status.isCharging)}</span>
		</div>
		<div class="flex justify-between">
			<span>最后更新时间:</span>
			<span>{dayjs(device.status.lastUpdateAt).fromNow()}</span>
		</div>
        <div class="flex justify-between">
			<span>从使用情况来看，大概率{getDescription(device.status.packageNameOpening)}</span>
		</div>
	</div>
</div>
