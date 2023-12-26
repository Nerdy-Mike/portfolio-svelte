<script lang="ts">
	import { sidebarOpen } from '../store';
	import SidebarItems from './SidebarItems.svelte';
	import SidebarHeader from './SidebarHeader.svelte';

	const style = {
		mobileOrientation: {
			start: 'left-0',
			end: 'right-0'
		}
	};

	export let mobileOrientation: 'start' | 'end' = 'end';
</script>

<aside
	class={`
			top-0
	    scrollbar
      bg-gray-900
      h-screen
      overflow-y-auto
      lg:bg-transparent lg:block lg:relative lg:w-16 2xl:w-20 lg:z-auto 
      ${style.mobileOrientation[mobileOrientation]}
      ${$sidebarOpen ? 'absolute w-8/12 z-40 sm:w-5/12' : 'hidden'}
   `}
>
	<div class="pb-32 lg:pb-6 h-full">
		<SidebarItems />
	</div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
