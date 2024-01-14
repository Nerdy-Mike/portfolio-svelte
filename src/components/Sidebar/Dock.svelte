<script lang="ts">
	import { Motion, useMotionValue } from 'svelte-motion';
	import AppIcon from './AppIcon.svelte';
	import { data } from './data/data';

	let mouseY = useMotionValue(Infinity);
	let shouldAnimate = false; // Define shouldAnimate

	function onMouseEnter(
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLUListElement;
		}
	) {
		mouseY.set(e.pageY);
		shouldAnimate = true; // Set shouldAnimate to true when mouse enters
	}

	function onMouseLeave() {
		mouseY.set(Infinity);
		shouldAnimate = false; // Set shouldAnimate to false when mouse leaves
	}
</script>

<Motion>
	<ul
		on:mousemove={onMouseEnter}
		on:mouseleave={onMouseLeave}
		class="md:pl-1 h-full flex flex-col justify-center gap-y-8"
	>
		{#each data as item, i}
			<AppIcon {mouseY} {item} {shouldAnimate} />
		{/each}
	</ul>
</Motion>
