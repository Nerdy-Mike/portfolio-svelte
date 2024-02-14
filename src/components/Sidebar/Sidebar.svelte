<script lang="ts">
	import { sidebarOpen } from '../../stores/side-bar-store';

	import Dock from './Dock.svelte';

	import SidebarItems from './SidebarItems.svelte';

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
      h-full
      overflow-y-auto
      lg:bg-transparent lg:block lg:relative lg:w-16 2xl:w-20 lg:z-auto lg:overflow-y-visible
      ${style.mobileOrientation[mobileOrientation]}
      ${$sidebarOpen ? 'absolute w-8/12 z-10 sm:w-5/12' : 'hidden'}
   `}
>
	<div class="pb-32 lg:pb-6 h-full">
		<Dock />
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
