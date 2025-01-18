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
	class="dark:bg-black dark:text-white min-w-screen min-h-screen overflow-hidden px-4 md:px-[10%] lg:px-[20%] xl:px-[30%]"
>
	<div class="relative mt-8 w-full">
		<h1 class="text-4xl font-bold mb-10">我的设备状态</h1>

		<div class="flex flex-col gap-8">
			{#each data.devices as device (device.name)}
				{#if device}
					<DeviceStatusCard {device} {dayjs} />
				{/if}
			{/each}
			{#if data.devices.length === 0}
				<h2 class="text-2xl font-semibold mb-2">
					无设备在线，可能是：
					<ul class="mt-4 list-disc ml-4 text-xl font-normal">
						<li>似了</li>
						<li>睡着了</li>
						<li>被学校关起来了</li>
					</ul>
				</h2>
			{/if}
		</div>
	</div>
</div>
