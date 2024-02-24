<script lang="ts">
	import { onMount } from 'svelte';

	import Saos from 'saos';

	import type { Project } from '@/types/project';
	import cn from '@/lib/tailwind-merged';

	import { worksData } from '@/routes/works/data';

	export let project: Project;

	const projectImages = project?.files ? project.files : [];

	let isModalOpen: boolean = false;

	function openModal() {
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
	});
</script>

<input type="checkbox" id={project.id} class="modal-toggle" bind:checked={isModalOpen} />
<div
	class="modal w-full"
	on:click|self={closeModal}
	on:keyup|self={closeModal}
	role="button"
	tabindex="0"
	on:keydown={handleKeyDown}
>
	<div class={cn(`modal-box relative`, project.renderType == 'web' ? 'max-w-6xl' : 'max-w-4xl')}>
		<div class="modal-action mt-0 mb-6">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				on:keyup={closeModal}
				on:click={closeModal}>✕</button
			>
		</div>
		<div class="flex flex-col md:grid md:grid-cols-2 gap-x-6">
			<div class="col-span-1 p-4 w-full">
				<div class="flex flex-row w-full justify-between items-center">
					<div class="uppercase tracking-wide text-md text-primary font-semibold">
						{project.company}
					</div>
					<p class="text-md font-semibold text-neutral-content">
						{project.year}
					</p>
				</div>

				<a
					href={project.showCase}
					class="block mt-1 text-lg leading-tight card-title text-accent hover:underline"
					>{project.project}</a
				>
				<p class="mt-2 text-neutral-content italic">{project.description}</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Role:</span>
					{project.role}
				</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Team size:</span>
					{project.teamSize}
				</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Tech stack:</span>
					{project.techStack}
				</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Duration:</span>
					{project.duration}
				</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Show case:</span>
					<a
						href={project.showCase}
						class=" hover:underline text-info"
						target="_blank"
						rel="noopener noreferrer">{project.showCase}</a
					>
				</p>

				{#if project.renderType == 'mobile'}
					<p class="mt-2 text-neutral-content">
						<span class="font-semibold text-secondary">Apple Store:</span>
						<a
							href={project.appStore}
							class=" hover:underline text-info"
							target="_blank"
							rel="noopener noreferrer">Link AppStore</a
						>
					</p>

					<p class="mt-2 text-neutral-content">
						<span class="font-semibold text-secondary">Play Store:</span>
						<a
							href={project.playStore}
							class=" hover:underline text-info"
							target="_blank"
							rel="noopener noreferrer">Link PlayStore</a
						>
					</p>
				{/if}

				<p class="mt-2 font-semibold text-secondary">Responsibilities:</p>
				<ul class="list-disc pl-4">
					{#each project.responsibilities as responsibility (responsibility)}
						<li>{responsibility}</li>
					{/each}
				</ul>
			</div>

			<div class="col-span-1">
				<div
					class={cn(
						'carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box',
						project.renderType == 'web' ? 'max-w-xl' : 'max-w-md'
					)}
				>
					{#each projectImages as image (image)}
						<div class="carousel-item">
							<!-- svelte-ignore a11y-img-redundant-alt -->
							<img
								src={image}
								class={cn('rounded-box object-fill', project.renderType == 'web' ? 'w-96' : 'w-72')}
								alt="Project image"
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<Saos animation={' slide-top 0.5s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'} once>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="card bg-base-100 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 hover:scale-[102%] cursor-pointer transition-transform duration-200 ease-in-out"
		on:click={openModal}
		role="button"
		tabindex="0"
	>
		<div class=" md:flex">
			<div class="p-8">
				<div class="flex flex-row w-full justify-between items-center">
					<div class="uppercase tracking-wide text-sm text-primary font-semibold">
						{project.company}
					</div>
					<p class="text-sm font-semibold text-neutral-content">
						{project.year}
					</p>
				</div>
				<p class="block mt-1 text-lg leading-tight card-title text-accent hover:underline">
					{project.project}
				</p>
				<p class="mt-2 text-neutral-content italic">{project.description}</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Project type:</span>
					<span class="uppercase">
						{project.type}
					</span>
				</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Role:</span>
					{project.role}
				</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Team size:</span>
					{project.teamSize}
				</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Tech stack:</span>
					{project.techStack}
				</p>
				<p class="mt-2 text-neutral-content">
					<span class="font-semibold text-secondary">Show case:</span>
					<span class="hover:text-info"> Click here for more details </span>
				</p>
			</div>
		</div>
	</div>
</Saos>

<style>
	@keyframes -global-slide-top {
		0% {
			-webkit-transform: translateY(100px);
			transform: translateY(100px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0px);
			transform: translateY(0px);
			opacity: 1;
		}
	}
</style>
