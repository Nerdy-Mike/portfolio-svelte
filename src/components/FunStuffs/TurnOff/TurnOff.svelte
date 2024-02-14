<script lang="ts">
	import { onMount } from 'svelte';
	import { TimelineMax, Power2 } from 'gsap';

	let isTurnedOn = true;
	let timeline: any;
	let showBlackScreen = null;
	let shouldShowScreen = true;
	let hideWhenDone = false;
	let shouldShowNextButton = false;

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

		setTimeout(() => {
			// this match time with the text animation
			shouldShowNextButton = true;
		}, 4000);
	});

	function handleClearScreen() {
		timeline.restart();
		showBlackScreen = true;
		setTimeout(() => {
			showBlackScreen = false;
		}, 1000);

		setTimeout(() => {
			showBlackScreen = true;
			timeline.reverse();
		}, 2000);

		setTimeout(() => {
			hideWhenDone = true;
		}, 2400);
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

{#if !hideWhenDone}
	<div class="fixed top-0 right-0 h-screen w-screen bg-black z-50">
		{#if shouldShowScreen}
			<div class="screen">
				{#if !showBlackScreen}
					<slot />

					{#if shouldShowNextButton}
						<button
							class="btn btn-secondary transition-opacity ease-in duration-500 opacity-0 appear"
							id="switcher-tv"
							on:click={handleClearScreen}>Let's go</button
						>
					{/if}
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style>
	.appear {
		opacity: 1 !important;
	}

	button {
		position: fixed;
		right: 80px;
		bottom: 80px;
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
