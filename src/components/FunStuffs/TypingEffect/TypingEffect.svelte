<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	export let quote: string;
	export let author: string;
</script>

<Typewriter mode={'cascade'}>
	<p class="text-2xl font-bold flex items-start font-serif">{quote}</p>

	<div class="flex flex-col items-end mx-10">
		<p class="text-lg font-semibold flex items-end font-serif">{author}</p>
	</div>
</Typewriter>

<!-- <Typewriter cursor keepCursorOnFinish delay={2000}>
</Typewriter> -->

<style>
</style>
