<script lang="ts">
	import { Motion, useSpring, useTransform } from 'svelte-motion';

	import type { ISidebarItem } from './data/type';

	export let mouseY;
	export let item: ISidebarItem;

	let ref: HTMLDivElement;
	let distance = useTransform(mouseY, (val: number) => {
		let bounds = ref?.getBoundingClientRect() ?? { y: 0, height: 0 };

		return val - bounds.y - bounds.height / 2;
	});

	let heightSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
	let height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

	let iconSizeSync = useTransform(height, [40, 100], [24, 48]);
	let iconSize = useSpring(iconSizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

	$: sizePx = `${$iconSize}px`;

	const style = {
		path: `flex items-center justify-center h-full w-full text-white whitespace-pre`
	};
</script>

<Motion>
	<div bind:this={ref} style="height: {$height ?? 40}px">
		<a class={style.path} href={item.path} aria-label={item.title}>
			<svelte:component this={item.icon} {sizePx} className="h-6 w-6" />
		</a>
	</div>
</Motion>

<style>
	.icon {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
