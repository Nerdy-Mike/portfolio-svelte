<script lang="ts">
	import { onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import * as easingFns from 'svelte/easing';

	export let quote: string;
	export let author: string;

	let easingName = 'linear';
	let positionStore;
	let position = 0;
	let cleanup = null;

	let authorPositionStore;
	let authorPosition = 0;
	let authorCleanup = null;

	onDestroy(() => {
		if (cleanup) cleanup();
		if (authorCleanup) authorCleanup();
	});

	$: easing = easingFns[easingName];
	$: {
		if (cleanup) cleanup();

		positionStore = tweened(0, { easing, duration: 3000 });
		cleanup = positionStore.subscribe((val) => (position = val));
		positionStore.set(quote.length);
	}

	setTimeout(() => {
		if (authorCleanup) authorCleanup();

		authorPositionStore = tweened(0, { easing, duration: 1500 });
		authorCleanup = authorPositionStore.subscribe((val) => (authorPosition = val));
		authorPositionStore.set(quote.length);
	}, 3000);
</script>

<div class="text-2xl font-bold flex items-center font-serif">
	{quote.substr(0, position)}
	{#if position < quote.length}<span class="cursor" />{/if}

	<p class="text-lg font-semibold" />
</div>

<div class="text-lg text-end font-semibold font-serif">
	{author.substr(0, authorPosition)}
	{#if authorPosition > 0 && authorPosition <= author.length}<span class="cursor" />{/if}
</div>

<style>
	h1 {
		font-size: 2.3rem;
	}
	.cursor {
		display: inline-block;
		width: 8px;
		height: 1.8rem;
		animation: blink 1s infinite;
	}

	@keyframes blink {
		0% {
			background: transparent;
		}
		40% {
			background: orange;
		}
		to {
			background: orange;
		}
	}
</style>
