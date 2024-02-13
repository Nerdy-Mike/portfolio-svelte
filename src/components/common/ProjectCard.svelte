<script lang="ts">
	import type { Project } from '@/types/project';

	export let project: Project;
</script>

<div
	class="card bg-base-100 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3"
>
	<div class="md:flex">
		<div class="md:flex-shrink-0">
			<!-- You can put an image here with <img src={project.image} alt={project.name} /> -->
		</div>
		<div class="p-8">
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
