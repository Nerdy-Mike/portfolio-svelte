<script lang="ts">
	import type { Project } from '@/types/project';

	import CloseIcon from '@/assets/icons/close-icon.svelte';

	export let project: Project;

	let isModalOpen: boolean = false;

	function openModal() {
		isModalOpen = true;
		console.log('Modal opened');
	}

	function closeModal() {
		isModalOpen = false;
		console.log('Modal closed');
	}
</script>

<input type="checkbox" id={project.id} class="modal-toggle" bind:checked={isModalOpen} />
<div class="modal w-full" on:click|self={closeModal} on:keyup|self={closeModal}>
	<div class="modal-box">
		<div class="modal-action mt-0">
			<button
				className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
				on:keyup={closeModal}
				on:click={closeModal}>✕</button
			>
		</div>
		<div class="p-4">
			<div class="uppercase tracking-wide text-sm text-primary font-semibold">
				{project.company}
			</div>
			<a
				href={project.showCase}
				class="block mt-1 text-lg leading-tight card-title text-accent hover:underline"
				>{project.project}</a
			>
			<p class="mt-2 text-neutral-content">{project.description}</p>
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
			<p class="mt-2 font-semibold text-secondary">Responsibilities:</p>
			<ul>
				{#each project.responsibilities as responsibility (responsibility)}
					<li>{responsibility}</li>
				{/each}
			</ul>
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
			<div class="uppercase tracking-wide text-sm text-primary font-semibold">
				{project.company}
			</div>
			<p class="block mt-1 text-lg leading-tight card-title text-accent hover:underline">
				{project.project}
			</p>
			<p class="mt-2 text-neutral-content">{project.description}</p>
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
		</div>
	</div>
</div>
