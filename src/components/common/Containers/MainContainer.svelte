<script lang="ts">
	import cn from '@/lib/tailwind-merged';
	export let extraClass = '';
	export let withBg = false;
</script>

<div
	class={cn(
		`overflow-y-auto  w-full h-full flex flex-col space-y-4 justify-center items-center ${extraClass}
		${withBg && 'transperentBg'}`
	)}
>
	<slot />
</div>

<style>
	.transperentBg {
		background-color: rgba(16 18 27 / 50%);
	}
</style>
