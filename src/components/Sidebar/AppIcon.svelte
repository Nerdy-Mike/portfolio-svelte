<script lang="ts">
	import { Motion, useSpring, useTransform } from 'svelte-motion';

	export let mouseY;

	let ref: HTMLDivElement;
	let distance = useTransform(mouseY, (val: number) => {
			let bounds = ref?.getBoundingClientRect() ?? { y: 0, height: 0 };

			return val - bounds.y - bounds.height / 2;
	});

	let heightSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
	let height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

	$: console.log($distance);
</script>

<Motion>
	<div
			bind:this={ref}
			style="height: {$height}px"
			class="aspect-square h-10 rounded-full bg-gray-400"
	/>
</Motion>