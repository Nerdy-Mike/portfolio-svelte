<script lang="ts">
	import { Motion, useSpring, useTransform } from 'svelte-motion';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { SIDE_BAR_ICON_SIZE_ORIGINAL, SIDE_BAR_ICON_SIZE_EXPLANDED } from './constants/constants';

	import type { ISidebarItem } from './data/type';

	import cn from '../../lib/tailwind-merged';

	export let mouseY: any;
	export let item: ISidebarItem;
	export let shouldAnimate: boolean;

	let minSize = SIDE_BAR_ICON_SIZE_ORIGINAL;
	let maxSize = SIDE_BAR_ICON_SIZE_EXPLANDED;

	let ref: HTMLDivElement;
	let distance = useTransform(mouseY, (val: number) => {
		let bounds = ref?.getBoundingClientRect() ?? { y: 0, height: 0 };

		return val - bounds.y - bounds.height / 2;
	});

	let heightSync = useTransform(distance, [-150, 0, 150], [minSize, maxSize * 1.3, minSize]);
	let height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

	let iconSizeSync = useTransform(height, [40, 100], [minSize, maxSize]);
	let iconSize = useSpring(iconSizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

	let topPositionSync = useTransform(height, [40, 100], [0, 30]);
	let topPosition = useSpring(topPositionSync, { mass: 0.1, stiffness: 150, damping: 12 });

	$: sizePx = `${$iconSize}px`;
	$: topPositionPx = $topPosition;

	// $: shouldAnimate = $iconSize > 40;

	const style = {
		path: `flex items-center justify-center h-full w-full text-white whitespace-pre`
	};
</script>

<!-- 
in:fly={{ x: -20, y: 0, opacity: 0.5, easing: quintOut, duration: 500 }}
out:fly={{ x: -20, y: 0, opacity: 0, easing: quintOut, duration: 500 }} -->

<Motion>
	<div bind:this={ref} style="height: {$height ?? 40}px" class="relative">
		<a class={style.path} href={item.path} aria-label={item.title}>
			<svelte:component this={item.icon} {sizePx} className="h-10 w-10" />
		</a>

		{#if shouldAnimate}
			<div
				class="absolute top-0 left-20 kbd text-primary-content text-lg bg-base-100 z-50"
				style="top: {topPositionPx}px"
				transition:fly={{
					duration: 500,
					x: -10,
					y: 0,
					opacity: 0,
					easing: quintOut
				}}
			>
				{item.title}
			</div>
		{/if}
	</div>
</Motion>

<style>
	.icon {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
