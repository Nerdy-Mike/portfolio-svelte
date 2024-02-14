<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import ProjectCard from '@/components/common/ProjectCard.svelte';
	import MainContainer from '@/components/common/Containers/MainContainer.svelte';

	import worksData from './works.json';

	let box: any;
	let yTop = 0;
	let yScroll = 0;
	let offSet = 0;

	let scrollHeight = 0;

	function parseScroll() {
		yTop = box.scrollTop;
		if (yScroll === 0) {
			yScroll = box.scrollHeight;
		}

		if (offSet === 0) {
			offSet = box.clientHeight;
		}

		let tempHeight = yTop + (yTop / yScroll) * offSet;

		if (tempHeight > yScroll) {
			scrollHeight = yScroll;
		} else {
			scrollHeight = tempHeight;
		}
	}

	onMount(() => {
		parseScroll();
	});
</script>

<MainContainer extraClass="card flex" withBg>
	<div
		class="flex flex-col h-screen w-full overflow-auto mb-6"
		bind:this={box}
		on:scroll={parseScroll}
		on:mousemove={parseScroll}
	>
		<div class="flex flex-col justify-center items-center pt-10 pb-4">
			<h1 class="text-4xl font-bold text-center">Works</h1>
			<div />
		</div>
		<div class="wrapper px-4 py-8 pb-10">
			<div class="flex h-full flex-col">
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

			<div class="flex items-start justify-center my-6">
				<div class="h-full w-[10] rounded-xl bg-gray-100">
					<div
						class=" rounded-full bg-white"
						style="height: {scrollHeight}px; width: 10px; border-radius: 12px; background: linear-gradient(180deg, rgba(73,144,249,1) 0%, rgba(11,99,229,1) 14%, rgba(11,99,229,1) 50%, rgba(11,99,229,1) 90%, rgba(105,159,239,1) 98%, rgba(255,255,255,1) 99.5%); position: relative;"
					>
						<div class="absolute bottom-[-18px] right-[-9px] rounded-full p-1">
							<div class="h-5 w-5 rounded-full bg-info" />
						</div>
					</div>
				</div>
			</div>

			<div class="flex h-full flex-col">
				{#each worksData.projects as project, index (project)}
					{#if index % 2 !== 0}
						<ProjectCard {project} />
					{:else}
						<div class="invisible">
							<ProjectCard {project} />
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<div class="flex pb-20 2xl:pb-56">
			<div />
		</div>
	</div>
</MainContainer>

<style>
	.wrapper {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: 1fr 100px 1fr;
		align-items: stretch;
	}
</style>
