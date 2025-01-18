<script lang="ts">
	import getAppName from "$lib/utils/getAppName";
	import getDescription from "$lib/utils/getDescription";
	import type { DeviceData } from "$lib";

	export let device: DeviceData;
	export let dayjs;

	function formatBatteryLevel(level: number) {
		return `${(level * 100).toFixed(0)}%`;
	}

	function formatBatteryStatus(isCharging: boolean) {
		return isCharging ? "充电中" : "未充电";
	}
</script>

<div class="bg-zinc-200 dark:bg-zinc-900 rounded-lg shadow p-4 max-w-[30rem]">
	<h2 class="text-lg font-semibold mb-2">{device.name}</h2>
	<div class="space-y-1 text-sm">
		{#if device.status.packageNameOpening}
			<div class="flex justify-between">
				<span>正在使用:</span>
				<span>{getAppName(device.status.packageNameOpening)}</span>
			</div>
		{/if}
		{#if device.status.batteryLevel}
			<div class="flex justify-between">
				<span>电池电量:</span>
				<span>{formatBatteryLevel(device.status.batteryLevel)}</span>
			</div>
		{/if}
		{#if device.status.isCharging}
			<div class="flex justify-between">
				<span>充电状态:</span>
				<span>{formatBatteryStatus(device.status.isCharging)}</span>
			</div>
		{/if}
		{#if device.status.windowTitle}
			<div class="flex justify-between">
				<span>窗口标题:</span>
				<span>{device.status.windowTitle}</span>
			</div>
		{/if}
		{#if device.status.url}
			<div class="flex justify-between">
				<span>打开网页:</span>
				<span>{device.status.url}</span>
			</div>
		{/if}
		<div class="flex justify-between">
			<span>最后更新时间:</span>
			<span>{dayjs(device.status.lastUpdateAt).fromNow()}</span>
		</div>
		<div class="flex justify-between">
			<span>从使用情况来看，大概率{getDescription(device.status)}</span>
		</div>
	</div>
</div>
