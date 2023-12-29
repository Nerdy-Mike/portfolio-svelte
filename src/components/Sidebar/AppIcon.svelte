<script lang="ts">
	import { Motion, useSpring, useTransform } from 'svelte-motion';

	export let mouseX;

	let ref: HTMLDivElement;
	let distance = useTransform(mouseX, (val: number) => {
		let bounds = ref?.getBoundingClientRect() ?? { x: 0, width: 0 };

		return val - bounds.x - bounds.width / 2;
	});

	let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
	let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
</script>

<Motion>
	<div
		bind:this={ref}
		style="width: {$width}px"
		class="aspect-square w-10 rounded-full bg-gray-400"
	/>
</Motion>
