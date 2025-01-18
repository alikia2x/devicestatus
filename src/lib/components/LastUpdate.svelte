<script lang="ts">
	export let lastUpdateAt: string;
	export let dayjs;
</script>

<span>{dayjs(lastUpdateAt).fromNow()}</span>
