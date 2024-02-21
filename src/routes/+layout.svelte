<script lang="ts">
	import { onMount } from 'svelte';

	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { THEMES, theme, getTheme } from '@/stores/theme-store';

	import { closeSidebar, sidebarOpen } from '@/stores/side-bar-store';

	import Overlay from '@/components/Overlay.svelte';
	import Sidebar from '@/components/Sidebar/Sidebar.svelte';
	import TopBar from '@/components/Topbar/TopBar.svelte';

	import TurnOff from '@/components/FunStuffs/TurnOff/TurnOff.svelte';
	import WelcomeScreen from '@/components/FunStuffs/TurnOff/WelcomeScreen.svelte';
	import TurnOffChangeTheme from '@/components/FunStuffs/TurnOff/TurnOffChangeTheme.svelte';

	import '../app.postcss';

	let bgImageClass = '';

	if (browser) {
		page.subscribe(() => {
			// close Sidebar on route changes. it's triggered when viewport is less than 1024px
			if ($sidebarOpen && window.innerWidth < 1024) {
				closeSidebar();
			}
		});
	}

	onMount(() => {
		const localTheme = getTheme();
		if (localTheme) {
			theme.set(localTheme);
		}
	});

	$: {
		switch ($theme) {
			case THEMES[0]:
				setTimeout(() => {
					bgImageClass = 'bg-image-space';
				}, 1000);
				break;
			case THEMES[1]:
				setTimeout(() => {
					bgImageClass = 'bg-image-forest';
				}, 1000);
				break;
			case THEMES[2]:
				setTimeout(() => {
					bgImageClass = 'bg-image-aqua';
				}, 1000);
				break;

			default:
				bgImageClass = 'bg-base-300';
		}
	}
</script>

<svelte:head>
	<title>Michael Le</title>
</svelte:head>

<div class={`flex bg-base-300 h-screen ${bgImageClass}`}>
	<!-- Turn off effect  -->
	<TurnOff>
		<WelcomeScreen />
	</TurnOff>

	<TurnOffChangeTheme />

	<!-- Mobile sidebar -->
	<aside class="z-10 flex-shrink-0 block md:hidden">
		<Sidebar mobileOrientation="start" />
	</aside>

	<!-- Desktop sidebar -->
	<aside class="z-10 flex-shrink-0 hidden pl-2 md:block">
		<Sidebar mobileOrientation="end" />
	</aside>

	<div class="flex flex-col flex-1 w-full overflow-y-hidden h-screen">
		<Overlay />
		<TopBar />
		<div class="flex flex-grow overflow-y-auto mr-4 mb-4">
			<slot />
		</div>
	</div>
</div>

<style>
	.bg-image-space {
		background-image: url('../assets/backgrounds/space.jpg');
		background-size: cover;
		background-position: center;
	}
	.bg-image-forest {
		background-image: url('../assets/backgrounds/forest.jpg');
		background-size: cover;
		background-position: center;
	}

	.bg-image-aqua {
		background-image: url('../assets/backgrounds/ocean.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
