<script lang="ts">
	import type { PageData } from "./$types";
	import dayjs from "dayjs";
	import "dayjs/locale/zh-cn";
	import relativeTime from "dayjs/plugin/relativeTime";
	import DeviceStatusCard from '$lib/components/DeviceStatusCard.svelte';

	dayjs.extend(relativeTime);
	dayjs.locale("zh-cn");
    function formatBatteryLevel(level: number | null) {
		if (level == null) {
			return "未知";
		}
		return `${(level * 100).toFixed(0)}%`;
	}

	export let data: PageData;
</script>

<div class="p-8 dark:bg-black dark:text-white min-w-screen min-h-screen overflow-hidden">
	<h1 class="text-4xl font-bold mb-6">寒寒的设备状态</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each data.devices as device (device.name)}
			{#if device}
				<DeviceStatusCard 
					{device}
					{dayjs} 
				/>
			{/if}
		{/each}
		{#if data.devices.length === 0}
			<h2 class="text-2xl font-semibold mb-2">暂无数据，可能是似了。</h2>
		{/if}
	</div>
</div>
