<script lang="ts">
	import Saos from 'saos';

	import { Motion, useMotionValue } from 'svelte-motion';
	import AppIcon from './AppIcon.svelte';
	import { data } from './data/data';

	let mouseY = useMotionValue(Infinity);
</script>

<Motion>
	<ul class="md:pl-1 h-full flex flex-col justify-center w-full items-center">
		<Saos animation={'slide-in 0.3s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			{#each data as item, i}
				<AppIcon {mouseY} {item} />
			{/each}
		</Saos>
	</ul>
</Motion>

<style>
	@keyframes -global-slide-in {
		0% {
			-webkit-transform: translateX(100px);
			transform: translateX(100px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0px);
			transform: translateX(0px);
			opacity: 1;
		}
	}
</style>
