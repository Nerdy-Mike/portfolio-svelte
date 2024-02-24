<script lang="ts">
	import { bfs, dijkstra } from '@/utils/path-finding';
	import { onDestroy, onMount, tick } from 'svelte';

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

	import CurlyArrow from '@/assets/icons/curly-arrow-64.png';

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

	type Cell = [number, number];
	type Grid = Cell[];

	let shortestPath: Grid;
	let startGirds: Grid = [];
	let startGrid: Cell | null;
	let endGrid: Cell | null = [5, 5];

	let randomGrid: Cell | null;
	let randomGrids: Grid = [];

	let pathQueue: any = [];
	let isAnimating = false;

	let intervalJob: any;

	const grid = Array.from({ length: 6 }, () => Array(8).fill(0));
	const gridHeight = grid.length;
	const gridWidth = grid[0].length;

	function selectCell(cellId: string) {
		const [i, j] = cellId.split('').map((c) => parseInt(c));
		endGrid = [i, j];

		findPathOnRandomGrids();
	}

	function resetGrid() {
		startGrid = null;
		endGrid = null;
		// reset grid cell css in shortest path
		shortestPath.forEach((cell) => {
			const cellId = `${cell[0]}${cell[1]}`;
			if (document && document?.getElementById(cellId))
				document.getElementById(cellId)?.classList.remove('bg-white');
		});
	}

	function animatePath() {
		stopInterval();
		pathQueue.forEach((path: any, pathIndex: number) => {
			path.forEach((cell: Cell, cellIndex: number) => {
				const cellId = `${cell[0]}${cell[1]}`;

				setTimeout(() => {
					// Clear the previous cell
					if (cellIndex > 0) {
						const prevCell = path[cellIndex - 1];
						const prevCellId = `${prevCell[0]}${prevCell[1]}`;
						if (document && document?.getElementById(prevCellId)) {
							document.getElementById(prevCellId)?.classList.remove('bg-white');
						}
					}

					// Animate the current cell
					if (document && document?.getElementById(cellId)) {
						document.getElementById(cellId)?.classList.add('bg-white');
					}
				}, cellIndex * 100);
			});
		});
	}

	async function findPath() {
		if (startGrid && endGrid) {
			const path = bfs(grid, startGrid, endGrid);
			shortestPath = path;
			animatePath();
		}
	}

	function generateRandomGrids() {
		if (randomGrids.length > 0) {
			randomGrids.forEach((cell) => {
				const cellId = `${cell[0]}${cell[1]}`;
				if (document && document?.getElementById(cellId)) console.log(cellId);
				document.getElementById(cellId)?.classList.remove('border-gray-200');
				document.getElementById(cellId)?.classList.add('border-gray-800');
			});
		}

		randomGrids = Array.from(grid, () => {
			return [Math.floor(Math.random() * gridHeight), Math.floor(Math.random() * gridWidth)];
		});

		randomGrids.forEach((cell) => {
			const cellId = `${cell[0]}${cell[1]}`;
			if (document && document?.getElementById(cellId)) {
				document.getElementById(cellId)?.classList.remove('border-gray-800');
				document.getElementById(cellId)?.classList.add('border-gray-200');
			}
		});
	}

	function startInterval() {
		clearInterval(intervalJob);
		setTimeout(() => {
			intervalJob = setInterval(generateRandomGrids, 1000);
		}, 1000);
	}

	function stopInterval() {
		clearInterval(intervalJob);
	}

	function findPathOnRandomGrids() {
		pathQueue = [];

		for (let i = 0; i < randomGrids.length; i++) {
			const path = bfs(grid, randomGrids[i], endGrid);
			if (path.length > 0) {
				pathQueue.push(path);
			}
		}
		if (!isAnimating) {
			animatePath();
		}
	}

	onMount(() => {
		intervalJob = setInterval(generateRandomGrids, 1000); // adjust the interval as needed
	});

	onDestroy(() => {
		clearInterval(intervalJob);
	});

	$: {
		if (startGrid && endGrid) {
			findPath();
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section
	class="flex flex-col justify-center items-center h-full relative"
	id="grid-path"
	on:mouseenter={stopInterval}
	on:mouseleave={startInterval}
>
	<div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 py-6" id="row">
		{#each grid as row, i}
			{#each row as cell, j}
				<div
					class="m-2 border-gray-800 border-2 p-2 rounded grayscale-[80%] transition-colors duration-500
						hover:scale-105 transform hover:rotate-3 hover:shadow-lg cursor-pointer"
					id={`${i}${j}`}
					on:click={() => selectCell(`${i}${j}`)}
					on:keydown={() => selectCell(`${i}${j}`)}
				>
					<svelte:component this={icons[i * 8 + j]} />
				</div>
			{/each}
		{/each}
	</div>

	<div class="absolute hidden lg:block lg:bottom-4 lg:-left-10 z-2">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={CurlyArrow} alt="Description of the image" class="rotate-90" />
		<div class="w-44 text-center text-primary-content">
			Click on icon for path finding animation
		</div>
	</div>

	<div class="absolute block lg:hidden -top-20 left-2 z-2">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<div class="w-40 text-primary-content">Click on icon for path finding animation</div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={CurlyArrow} alt="Description of the image" class="rotate-180" />
	</div>
</section>

<style>
</style>
