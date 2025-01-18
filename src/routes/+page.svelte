<script lang="ts">
	import type { PageData } from "./$types";
	import dayjs from "dayjs";
	import "dayjs/locale/zh-cn";
	import relativeTime from "dayjs/plugin/relativeTime";
	import DeviceStatusCard from "$lib/components/DeviceStatusCard.svelte";

	dayjs.extend(relativeTime);
	dayjs.locale("zh-cn");

	export let data: PageData;
</script>

<div
	class="dark:bg-black dark:text-white min-w-screen min-h-screen overflow-hidden xl:px-[30%]"
>
	<div class="relative mt-8 w-full">
		<h1 class="text-4xl font-bold mb-10">我的设备状态</h1>

		<div class="flex flex-col">
			{#each data.devices as device (device.name)}
				{#if device}
					<DeviceStatusCard {device} {dayjs} />
				{/if}
			{/each}
			{#if data.devices.length === 0}
				<h2 class="text-2xl font-semibold mb-2">
					暂无数据，可能是似了。
				</h2>
			{/if}
		</div>
	</div>
</div>
