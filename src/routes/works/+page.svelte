<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import type { ProjectsData } from '@/types/project';

	import ProjectCard from '@/components/common/ProjectCard.svelte';
	import MainContainer from '@/components/common/Containers/MainContainer.svelte';

	import CurlyArrow from '@/assets/icons/curly-arrow-64.png';

	import data from './works.json';

	let box: any;
	let scrollHeight = 0;
	let maxScrollHeight = 0;
	let clientHeight = 0;

	let isMobile = false;

	let scrollableElement: any;
	let scrollableElementHeight = 0;

	const worksData = data as ProjectsData;

	function parseScroll() {
		if (maxScrollHeight == 0) {
			maxScrollHeight = box.scrollHeight;
		}
		if (clientHeight == 0) {
			clientHeight = box.clientHeight;
		}
		if (scrollableElementHeight == 0) {
			scrollableElementHeight = scrollableElement.clientHeight;
		}
		let boxSrollHeight = maxScrollHeight - clientHeight;
		const elementScrollRatio = maxScrollHeight / boxSrollHeight;

		let temp = elementScrollRatio * box.scrollTop;
		if (temp > scrollableElementHeight) {
			scrollHeight = scrollableElementHeight;
		} else {
			scrollHeight = temp;
		}
	}

	onMount(() => {
		window.addEventListener('scroll', parseScroll);
		window.addEventListener('resize', () => {
			isMobile = window.innerWidth <= 768;
		});
	});
</script>

<MainContainer extraClass="card flex" withBg>
	<div
		class="flex flex-col h-screen w-full overflow-auto my-6 relative"
		bind:this={box}
		on:scroll={parseScroll}
		on:mousemove={parseScroll}
	>
		<div class="flex flex-col justify-center items-center pt-10 pb-4">
			<h1 class="text-4xl font-bold text-center">Works</h1>
			<div />
		</div>

		{#if isMobile}
			<div class="wrapper_mobile px-4 py-8 pb-10">
				<div class="flex items-start justify-center my-6" bind:this={scrollableElement}>
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
						<ProjectCard {project} />
					{/each}
				</div>
			</div>
		{:else}
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

				<div class="flex items-start justify-center my-6" bind:this={scrollableElement}>
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
		{/if}

		<div class="flex pb-20 2xl:pb-56">
			<div />
		</div>
	</div>

	<div class="absolute bottom-4 right-16 z-10">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<div class="flex flex-col items-center justify-center">
			<img src={CurlyArrow} alt="Description of the image" class="" />
			<div class="w-40 text-center">Click on tab for details</div>
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

	.wrapper_mobile {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: 30px 1fr;
		align-items: stretch;
	}
</style>
