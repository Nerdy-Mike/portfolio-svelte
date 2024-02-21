<script lang="ts">
	import { onMount } from 'svelte';
	import { TimelineMax, Power2 } from 'gsap';

	import { get } from 'svelte/store';
	import { theme, setTheme } from '@/stores/theme-store';

	import cn from '@/lib/tailwind-merged';

	let isTurnedOn = false;
	let timeline: any;
	let isFirstTime = true;

	let currentTheme = get(theme); // get initial theme

	onMount(() => {
		timeline = new TimelineMax({
			paused: true
		});

		timeline
			.to('.screen', 0.2, {
				width: '100vw',
				height: '2px',
				background: '#ffffff',
				ease: Power2.easeOut
			})
			.to('.screen', 0.2, {
				width: '0',
				height: '0',
				background: '#ffffff'
			});
	});

	function toggleSwitchOff() {
		if (isTurnedOn) {
			timeline.restart();
		}
		isTurnedOn = false;
	}

	function toggleSwitchOn() {
		if (!isTurnedOn) {
			const screen = document.querySelector('.screen') as HTMLElement;
			if (screen) {
				screen.style.width = '100vw';
				screen.style.height = '100vh';
				screen.style.background = '#000';
			}
			timeline.reverse();
		}
		isTurnedOn = true;
	}

	function toggleSwitcherTV() {
		if (isTurnedOn) {
			toggleSwitchOff();
		} else {
			toggleSwitchOn();
		}
	}

	function handleThemeChange() {
		toggleSwitchOn();
		setTimeout(() => {
			toggleSwitchOff();
		}, 2000);
	}

	$: {
		if ($theme !== currentTheme) {
			currentTheme = $theme;
			handleThemeChange();
		}
	}
</script>

<div id="screen-changer" class={cn('screen')}>
	<slot />
</div>

<style>
	button {
		position: fixed;
		right: 20px;
		bottom: 20px;
		padding: 20px;
		font-weight: 700;
		font-size: 16px;
		z-index: 13;
	}

	.screen {
		background-color: #000;
		color: #e1eef6;
		position: fixed;
		top: 50%;
		left: 50%;
		width: 0;
		height: 0;
		transform: translate(-50%, -50%);
		content: ' ';
		overflow: hidden;
		background-size: cover;
		z-index: 12;
	}
</style>
