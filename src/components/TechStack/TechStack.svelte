<script lang="ts">
	import Atlassian from '../../assets/tech-stacks/Atlassian.svelte';
	import Auth0 from '../../assets/tech-stacks/Auth0.svelte';
	import Awv from '../../assets/tech-stacks/Awv.svelte';
	import Bable from '../../assets/tech-stacks/Bable.svelte';
	import Bootstrap from '../../assets/tech-stacks/Bootstrap5.svelte';
	import DigitalOcean from '../../assets/tech-stacks/DigitalOcean.svelte';
	import Docker from '../../assets/tech-stacks/Docker.svelte';
	import Eslint from '../../assets/tech-stacks/Eslint.svelte';
	import Firebase from '../../assets/tech-stacks/Firebase.svelte';
	import Git from '../../assets/tech-stacks/Git.svelte';
	import GitHub from '../../assets/tech-stacks/Github.svelte';
	import Gitlab from '../../assets/tech-stacks/Gitlab.svelte';
	import Go from '../../assets/tech-stacks/Go.svelte';
	import Graphql from '../../assets/tech-stacks/Graphql.svelte';
	import Jira from '../../assets/tech-stacks/Jira.svelte';
	import Js from '../../assets/tech-stacks/Js.svelte';
	import Linux from '../../assets/tech-stacks/Linux.svelte';
	import Materialui from '../../assets/tech-stacks/Materialui.svelte';
	import Mongo from '../../assets/tech-stacks/Mongo.svelte';
	import Mysql from '../../assets/tech-stacks/Mysql.svelte';
	import Nextjs from '../../assets/tech-stacks/Nextjs.svelte';
	import Nodejs from '../../assets/tech-stacks/Nodejs.svelte';
	import Npm from '../../assets/tech-stacks/Npm.svelte';
	import Postgresql from '../../assets/tech-stacks/Postgresql.svelte';
	import Python from '../../assets/tech-stacks/Python.svelte';
	import React from '../../assets/tech-stacks/React.svelte';
	import Redux from '../../assets/tech-stacks/Redux.svelte';
	import Sass from '../../assets/tech-stacks/Sass.svelte';
	import Svelte from '../../assets/tech-stacks/Svelte.svelte';
	import Tailwind from '../../assets/tech-stacks/Tailwind.svelte';
	import Typescript from '../../assets/tech-stacks/Ts.svelte';
	import Vite from '../../assets/tech-stacks/Vite.svelte';
	import Webpack from '../../assets/tech-stacks/Webpack.svelte';

	import CurlyArrow from '../../assets/icons/curly-arrow-64.png';

	import IconWrapper from './IconWrapper.svelte';

	const FE = [
		Atlassian,
		Bootstrap,
		Materialui,
		Nextjs,
		React,
		Redux,
		Sass,
		Svelte,
		Tailwind,
		Typescript,
		Vite,
		Webpack
	];

	const BE = [Firebase, Go, Graphql, Js, Nodejs, Python, Postgresql, Mysql, Mongo];

	const Tools = [
		Auth0,
		Awv,
		Bable,
		DigitalOcean,
		Docker,
		Eslint,
		Git,
		GitHub,
		Gitlab,
		Jira,
		Linux,
		Npm
	];

	const icons = [
		Atlassian,
		Auth0,
		Awv,
		Bable,
		Bootstrap,
		DigitalOcean,
		Docker,
		Eslint,
		Firebase,
		Git,
		GitHub,
		Gitlab,
		Go,
		Graphql,
		Jira,
		Js,
		Linux,
		Materialui,
		Mongo,
		Mysql,
		Nextjs,
		Nodejs,
		Npm,
		Postgresql,
		Python,
		React,
		Redux,
		Sass,
		Svelte,
		Tailwind,
		Typescript,
		Vite,
		Webpack
	];
</script>

<div class="flex flex-col justify-center items-center h-full relative">
	<div class="grid grid-cols-8">
		{#each icons as Icon}
			<IconWrapper {Icon} />
		{/each}
	</div>

	<div class="absolute bottom-4 right-16 z-10">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={CurlyArrow} alt="Description of the image" class="" />
		<div class="w-40">My tech stack and why it doesn't matter</div>
	</div>
</div>

<!-- <section
	class="mt-10 w-full lg:mt-20 lg:before:blur-sm lg:after:blur-sm lg:before:-left-2 lg:after:-right-2 lg:after:top-0 lg:before:top-0 lg:after:z-1 lg:after:rotate-180 lg:after:bg-white-gradient lg:after:tran xl:after-w-[25rem] xl:before-w-[25rem] 2xl:after:w-[30rem] lg:after:h-full lg:after:content-[''] lg:after:absolute lg:before:z-1 lg:before:bg-white-gradient 2xl:before:w-[30rem] lg:before:h-full relative lg:before:content-[''] lg:before:absolute"
>
	<div class="container max-w-full">
		<div class="flex flex-col items-center">
			<div class="whitespace-nowrap group py-5">
				<div
					class="inline-block animate-[slide_80s_linear_infinite] mr-10 group-hover:[animation-play-state:paused]"
				>
					<div class="flex gap-10">
						<div class="flex gap-10">
							{#each icons as Icon}
								<IconWrapper {Icon} />
							{/each}
						</div>
					</div>
				</div>
				<div
					class="inline-block animate-[slide_80s_linear_infinite] group-hover:[animation-play-state:paused]"
				>
					<div class="flex gap-10">
						<div class="flex gap-10">
							{#each icons as Icon}
								<IconWrapper {Icon} />
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->
