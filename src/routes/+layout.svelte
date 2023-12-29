<script lang="ts">
	import { enhance } from '$app/forms';
	import { browser } from '$app/environment';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { page } from '$app/stores';

	import { closeSidebar, sidebarOpen } from '../stores/side-bar-store';

	import Overlay from '../components/Overlay.svelte';
	import Sidebar from '../components/Sidebar/Sidebar.svelte';
	import TopBar from '../components/Topbar/TopBar.svelte';

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

<div class="bg-base-300 h-screen bg-image">
	<div class=" flex items-start h-full">
		<Overlay />
		<Sidebar mobileOrientation="end" />
		<div class="flex flex-col h-full pl-0 w-full pr-4 py-4">
			<TopBar />
			<main class="main h-full pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 card">
				<slot />
			</main>
		</div>
	</div>
</div>

<style>
	.bg-image {
		background-image: url('../assets/backgrounds/space.jpg');
		background-size: cover;
		background-position: center;
	}

	.main {
		color: #f9fafb;
		background-color: rgba(16 18 27 / 50%);
		overflow: auto;
	}
	.main::-webkit-scrollbar {
		width: 6px;
		border-radius: 10px;
	}
	.main::-webkit-scrollbar-thumb {
		background: rgb(1 2 3 / 40%);
		border-radius: 10px;
	}
</style>
