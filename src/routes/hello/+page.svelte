<script lang="ts">
	import MainContainer from '@/components/common/Containers/MainContainer.svelte';

	import ProjectCard from '@/components/common/ProjectCard.svelte';

	// https://github.com/doomd
	import { onMount } from 'svelte';
	let box: any;

	let yTop = 0;
	let yScroll = 0;
	let yHeight = 0;

	const lorem = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas est justo, condimentum et velit ac, euismod euismod est. Praesent urna elit, tempus vulputate nunc eu, ornare aliquet nibh. Praesent nisl lectus, viverra eu ullamcorper eu, viverra eu risus. Nullam tincidunt egestas laoreet. Integer euismod eros vel scelerisque aliquam. Phasellus sit amet velit eu elit placerat sagittis. Vivamus magna orci, vestibulum vitae dignissim eget, laoreet a mi. Curabitur cursus arcu vel odio tincidunt, eget feugiat justo lacinia.</p>`;
	const loremArray = Array(60).fill(lorem);

	function parseScroll() {
		yTop = box.scrollTop;
		yHeight = box.clientHeight;
		yScroll = box.scrollHeight;
		console.log('dfsf');
	}

	onMount(() => parseScroll());
</script>

<MainContainer>
	<!-- <div class="" bind:this={box} on:scroll={parseScroll} on:mousemove={parseScroll}>
		{#each loremArray as paragraph}
			{@html paragraph}
		{/each}
	</div> -->

	<div class="report">
		<div>vertical: {yTop} from top, box is {yHeight}px high, ({yScroll} total scroll height)</div>
	</div>
</MainContainer>

<style>
	.box {
		width: 300px;
		height: 100vh;
		overflow: scroll;
		resize: both;
		margin-bottom: 20px;
		white-space: nowrap;
	}
</style>
