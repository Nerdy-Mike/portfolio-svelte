<script lang="ts">
	import { onMount } from 'svelte';

	import type { Project } from '@/types/project';
	import cn from '@/lib/tailwind-merged';

	export let project: Project;

	let projectImages: any[] = [];

	let isModalOpen: boolean = false;

	function openModal() {
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}

	async function getImagesFromFolder(path: string) {
		try {
			const response = await fetch(`/api/images`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ folder: path })
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const images = await response.json();
			// get the images from the folder
			projectImages = images.body.images;
			console.log(projectImages);
		} catch (error) {
			console.error('An error occurred while fetching the images:', error);
		}
	}
	onMount(() => {
		getImagesFromFolder(project.folder);
	});
</script>

<input type="checkbox" id={project.id} class="modal-toggle" bind:checked={isModalOpen} />
<div class="modal w-full" on:click|self={closeModal} on:keyup|self={closeModal}>
	<div class={cn(`modal-box `, project.renderType == 'web' ? 'max-w-6xl' : 'max-w-4xl')}>
		<div class="modal-action mt-0 mb-6">
			<button
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				on:keyup={closeModal}
				on:click={closeModal}>✕</button
			>
		</div>
		<div class="grid grid-cols-2 gap-x-6">
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
				<p class="mt-2 font-semibold text-secondary">Responsibilities:</p>
				<ul>
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
								src="data:image/jpeg;base64,{image}"
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

<div
	class="card bg-base-100 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 hover:scale-[102%] cursor-pointer transition-transform duration-200 ease-in-out"
	on:click={openModal}
	on:keyup={openModal}
>
	<div class="md:flex">
		<div class="md:flex-shrink-0">
			<!-- You can put an image here with <img src={project.image} alt={project.name} /> -->
		</div>
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
				<a
					href={project.showCase}
					class=" hover:underline text-info"
					target="_blank"
					rel="noopener noreferrer">{project.showCase}</a
				>
			</p>
		</div>
	</div>
</div>
