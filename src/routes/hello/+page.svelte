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

	<div
		class="box flex flex-row items-start justify-center"
		bind:this={box}
		on:scroll={parseScroll}
		on:mousemove={parseScroll}
	>
		<div class="flex h-full flex-col">
			<div class="report">
				<div>
					vertical: {yTop} from top, box is {yHeight}px high, ({yScroll} total scroll height)
				</div>
			</div>
			{#each worksData.projects as project, index (project)}
				{#if index % 2 === 0}
					<ProjectCard {project} />
				{:else}
					<div class="invisible">
						<ProjectCard {project} />
					</div>
				{/if}
			{/each}
		</div>

		<div class="flex h-full w-[10] rounded-xl bg-gray-100">
			<div
				class="absolute rounded-full bg-white p-1"
				style="height: {yTop}px; width: 10px; border-radius: 12px; background: linear-gradient(180deg, rgba(73,144,249,1) 0%, rgba(11,99,229,1) 14%, rgba(11,99,229,1) 50%, rgba(11,99,229,1) 90%, rgba(105,159,239,1) 98%, rgba(255,255,255,1) 99.5%); position: relative;"
			>
				<div class="h-6 w-6 rounded-full bg-blue-500" />
			</div>
		</div>
	</div>

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
