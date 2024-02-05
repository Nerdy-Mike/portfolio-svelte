<script lang="ts">
	import Spirograph from '../Spirograph/Spirograph.svelte';

	import quotes from '../data/quotes.json';

	// get a random quote from the quotes.json

	let randomQuote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
</script>

<div class="grid grid-cols-2">
	<div class="col-span-1">
		<Spirograph />
	</div>

	<div class="col-span-1 flex items-center justify-center">
		<div class="text-center flex flex-col">
			<p class="text-2xl font-bold">{randomQuote.content}</p>
			<p class="text-lg font-semibold">{randomQuote.author}</p>
		</div>
	</div>
</div>

<style>
</style>
