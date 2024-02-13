<script lang="ts">
	import { enhance } from '$app/forms';
	import { browser } from '$app/environment';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { page } from '$app/stores';

	import { closeSidebar, sidebarOpen } from '../stores/side-bar-store';

	import Overlay from '../components/Overlay.svelte';
	import Sidebar from '../components/Sidebar/Sidebar.svelte';
	import TopBar from '../components/Topbar/TopBar.svelte';
	import TurnOff from '../components/FunStuffs/TurnOff/TurnOff.svelte';
	import WelcomeScreen from '../components/FunStuffs/TurnOff/WelcomeScreen.svelte';

	import '../app.postcss';

	if (browser) {
		page.subscribe(() => {
			// close Sidebar on route changes. it's triggered when viewport is less than 1024px
			if ($sidebarOpen && window.innerWidth < 1024) {
				closeSidebar();
			}
		});
	}
</script>

<div class="flex bg-base-300 h-screen bg-image">
	<!-- Turn off effect  -->
	<!-- <TurnOff>
		<WelcomeScreen />
	</TurnOff> -->

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
	.bg-image {
		background-image: url('../assets/backgrounds/space.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
