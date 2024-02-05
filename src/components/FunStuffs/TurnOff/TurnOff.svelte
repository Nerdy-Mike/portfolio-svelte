<script lang="ts">
	import { onMount } from 'svelte';
	import { TimelineMax, Power2 } from 'gsap';

	let isTurnedOn = true;
	let timeline: any;

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

		setTimeout(toggleSwitchOff, 4000);
	});

	function toggleSwitchOff() {
		if (isTurnedOn) {
			timeline.restart();
		}
		isTurnedOn = false;
	}

	function toggleSwitcherTV() {
		if (isTurnedOn) {
			timeline.restart();
		} else {
			timeline.reverse();
		}
		isTurnedOn = !isTurnedOn;
	}
</script>

<div class="screen">
	<slot />
</div>
<button id="switcher-tv" on:click={toggleSwitcherTV}>Turn on/off</button>

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
		width: 100vw;
		height: 100vh;
		transform: translate(-50%, -50%);
		content: ' ';
		overflow: hidden;
		background-size: cover;
		z-index: 12;
	}
</style>
