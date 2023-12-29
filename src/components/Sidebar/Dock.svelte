<script lang="ts">
	import { Motion, useMotionValue } from 'svelte-motion';
	import AppIcon from './AppIcon.svelte';

	let mouseX = useMotionValue(Infinity);

	const icons = [1, 2, 3, 4, 5];
</script>

<Motion>
	<div
		on:mousemove={(e) => mouseX.set(e.pageX)}
		on:mouseleave={() => mouseX.set(Infinity)}
		class="mx-auto mt-10 flex  h-16 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
	>
		{#each icons as _, i}
			<AppIcon {mouseX} />
		{/each}
	</div>
</Motion>
