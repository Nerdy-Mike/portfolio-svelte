<script lang="ts">
	import Ant from '@/assets/tech-stacks/Ant.svelte';
	import Atlassian from '@/assets/tech-stacks/Atlassian.svelte';
	import Auth0 from '@/assets/tech-stacks/Auth0.svelte';
	import Awv from '@/assets/tech-stacks/Awv.svelte';
	import Bable from '@/assets/tech-stacks/Bable.svelte';
	import Bootstrap from '@/assets/tech-stacks/Bootstrap5.svelte';
	import DigitalOcean from '@/assets/tech-stacks/DigitalOcean.svelte';
	import Docker from '@/assets/tech-stacks/Docker.svelte';
	import Eslint from '@/assets/tech-stacks/Eslint.svelte';
	import Firebase from '@/assets/tech-stacks/Firebase.svelte';
	import Gatsby from '@/assets/tech-stacks/Gatsby.svelte';
	import Git from '@/assets/tech-stacks/Git.svelte';
	import GitHub from '@/assets/tech-stacks/Github.svelte';
	import Gitlab from '@/assets/tech-stacks/Gitlab.svelte';
	import Go from '@/assets/tech-stacks/Go.svelte';
	import Google from '@/assets/tech-stacks/Google.svelte';
	import Graphql from '@/assets/tech-stacks/Graphql.svelte';
	import Jira from '@/assets/tech-stacks/Jira.svelte';
	import Js from '@/assets/tech-stacks/Js.svelte';
	import Linux from '@/assets/tech-stacks/Linux.svelte';
	import Materialui from '@/assets/tech-stacks/Materialui.svelte';
	import Mongo from '@/assets/tech-stacks/Mongo.svelte';
	import Mysql from '@/assets/tech-stacks/Mysql.svelte';
	import Nextjs from '@/assets/tech-stacks/Nextjs.svelte';
	import Nodejs from '@/assets/tech-stacks/Nodejs.svelte';
	import Npm from '@/assets/tech-stacks/Npm.svelte';
	import Postgresql from '@/assets/tech-stacks/Postgresql.svelte';
	import Python from '@/assets/tech-stacks/Python.svelte';
	import React from '@/assets/tech-stacks/React.svelte';
	import Redux from '@/assets/tech-stacks/Redux.svelte';
	import Sass from '@/assets/tech-stacks/Sass.svelte';
	import Svelte from '@/assets/tech-stacks/Svelte.svelte';
	import Tailwind from '@/assets/tech-stacks/Tailwind.svelte';
	import Typescript from '@/assets/tech-stacks/Ts.svelte';
	import Vite from '@/assets/tech-stacks/Vite.svelte';
	import Webpack from '@/assets/tech-stacks/Webpack.svelte';
	import CurlyArrow from '@/assets/icons/curly-arrow-64.png';
	import Numpy from '@/assets/tech-stacks/Numpy.svelte';
	import Jest from '@/assets/tech-stacks/Jest.svelte';
	import Prettier from '@/assets/tech-stacks/Prettier.svelte';
	import Tensorflow from '@/assets/tech-stacks/Tensorflow.svelte';
	import Seaborn from '@/assets/tech-stacks/Seaborn.svelte';
	import ChatGpt from '@/assets/tech-stacks/ChatGPT.svelte';
	import Vercel from '@/assets/tech-stacks/vercel.svelte';
	import OpenCv from '@/assets/tech-stacks/OpenCV.svelte';
	import Nginx from '@/assets/tech-stacks/Nginx.svelte';
	import Rust from '@/assets/tech-stacks/Rust.svelte';
	import MaterialUi from '@/assets/tech-stacks/Material-ui.svelte';
	import Shopify from '@/assets/tech-stacks/Shopify.svelte';

	import IconWrapper from './IconWrapper.svelte';
	const icons = [
		Ant,
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
		MaterialUi,
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
		Webpack,
		Numpy,
		Jest,
		Prettier,
		Tensorflow,
		Seaborn,
		Gatsby,
		Google,
		ChatGpt,
		Vercel,
		OpenCv,
		Nginx,
		Rust,
		Shopify
	];
</script>

<div class="flex flex-col justify-center items-center h-full relative">
	<div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
		{#each icons as Icon}
			<IconWrapper {Icon} />
		{/each}
	</div>

	<div class="absolute hidden lg:block lg:bottom-4 lg:right-16 z-2">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={CurlyArrow} alt="Description of the image" class="" />
		<div class="w-40">My tech stack</div>
	</div>

	<div class="absolute block lg:hidden -top-20 left-2 z-2">
		<div class="w-40">My tech stack</div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={CurlyArrow} alt="Description of the image" class="rotate-180" />
	</div>
</div>
