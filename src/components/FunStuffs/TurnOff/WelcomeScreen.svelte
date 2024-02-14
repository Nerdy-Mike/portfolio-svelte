<script lang="ts">
	import { onMount } from 'svelte';

	import TypingEffect from '@/components/FunStuffs/TypingEffect/TypingEffect.svelte';

	import Spirograph from '../Spirograph/Spirograph.svelte';

	import quotes from '../data/quotes.json';

	// get a random quote from the quotes.json
	let randomQuote: { content: string; author: string } | undefined;
	onMount(() => {
		randomQuote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
	});
</script>

<div class="grid grid-cols-2">
	<div class="col-span-1">
		<Spirograph />
	</div>

	{#if randomQuote}
		<div class="col-span-1 flex items-center justify-center">
			<div class="text-center flex flex-col">
				<TypingEffect quote={randomQuote.content} author={randomQuote.author} />
			</div>
		</div>
	{/if}
</div>

<style>
</style>
