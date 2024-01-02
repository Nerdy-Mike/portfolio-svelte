<script lang="ts">
	import { Motion, useMotionValue } from 'svelte-motion';
	import AppIcon from './AppIcon.svelte';
	import { data } from './data';

	let mouseY = useMotionValue(Infinity);

	const icons = [1, 2, 3, 4, 5];
</script>

<Motion>
	<ul
		on:mousemove={(e) => mouseY.set(e.pageY)}
		on:mouseleave={() => mouseY.set(Infinity)}
		class="mx-auto my-auto pt-2 flex flex-col w-16 justify-center items-center gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
	>
		{#each icons as _, i}
			<AppIcon {mouseY} />
		{/each}
	</ul>
</Motion>
