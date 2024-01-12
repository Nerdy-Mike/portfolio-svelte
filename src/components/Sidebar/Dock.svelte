<script lang="ts">
	import { Motion, useMotionValue } from 'svelte-motion';
	import AppIcon from './AppIcon.svelte';
	import { data } from './data/data';

	let mouseY = useMotionValue(Infinity);
</script>

<Motion>
	<ul
		on:mousemove={(e) => mouseY.set(e.pageY)}
		on:mouseleave={() => mouseY.set(Infinity)}
		class="md:pl-1 h-full flex flex-col justify-center  gap-y-8"
	>
		{#each data as item, i}
			<AppIcon {mouseY} {item} />
		{/each}
	</ul>
</Motion>
