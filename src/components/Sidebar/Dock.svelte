<script lang="ts">
	import { spring, tweened, type Spring } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	interface Ref {
		ref: HTMLDivElement | null;
		width: Spring<number>;
		updateWidth?: (val: number) => void;
	}

	let mouseX = tweened(Infinity, { duration: 300, easing: cubicOut });
	let dockWidth = 8;
	const width = spring(100);
	width.stiffness = 0.3;
	width.damping = 0.4;
	width.precision = 0.005;

	let icons = Array.from({ length: dockWidth }, (_, i) => i);
	let refs: Ref[] = icons.map(() => ({
		ref: null,
		width: width
	}));
	let divRefs = Array(dockWidth).fill(null);

	onMount(() => {
		refs = refs.map((ref, i) => ({
			...ref,
			ref: divRefs[i]
		}));
	});

	function handleMouseMove(e) {
		mouseX.set(e.pageX);

		refs.forEach(({ ref, width }) => {
			if (!ref) return;
			// chec if the current mouse position is within the bounds of the element

			let bounds = ref.getBoundingClientRect() ?? { x: 0, width: 0 };

			let distance = e.pageX - bounds.x - bounds.width / 2;
			if (distance < -150 || distance > 150) {
				console.log('distance', distance);
			}
			let newWidth = distance < -150 || distance > 150 ? 40 : 100;
			width.set(newWidth);
		});
	}

	function handleMouseLeave() {
		mouseX.set(Infinity);
		// refs.forEach(({ width }) => width.set(40));
	}
</script>

<div
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	class="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3"
>
	{#each icons as _, i}
		<div
			bind:this={divRefs[i]}
			style="width: {refs[i].width}px"
			class="aspect-square w-10 rounded-full bg-gray-400"
		/>
	{/each}
</div>
