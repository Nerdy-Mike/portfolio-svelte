<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let canvasCircle: HTMLCanvasElement;
	let canvasSpiro: HTMLCanvasElement;
	let canvasImage: HTMLCanvasElement;
	let showCircles = true;
	let loopTime = 1000; // Decrease this to make the spirograph complete its circuit faster
	let tickTime = 5; // Decrease this to make the spirograph update its position more frequently
	let bigCircle = 150;
	let smallCircle = 52;
	let pValue = 0.6;

	let width = 400,
		height = 400,
		PR = window.devicePixelRatio || 1,
		R = 150,
		r = 52,
		l = 0.6,
		p = l * r,
		k = r / R;

	let t: any;

	onMount(() => {
		// Your JavaScript code goes here, but with some modifications to work with Svelte
		// For example, instead of using d3.select('canvas#circle'), use:
		const backContext = canvasCircle.getContext('2d');
		const context = canvasSpiro.getContext('2d');
		const contextIMG = canvasImage.getContext('2d');
		// And so on...

		if (backContext && context && contextIMG) {
			backContext.scale(PR, PR);
			context.scale(PR, PR);
			contextIMG.scale(PR, PR);

			function pinPoint(angle: number): [number, number] {
				return [
					R * ((1 - k) * Math.cos(angle) + l * k * Math.cos(((1 - k) / k) * angle)) + width / 2,
					R * ((1 - k) * Math.sin(angle) - l * k * Math.sin(((1 - k) / k) * angle)) + height / 2
				];
			}

			let p0: [number, number] = [width / 2 + (R - r) + p, height / 2];

			backContext.strokeStyle = 'gray';
			backContext.fillStyle = 'rgba(255, 255, 255, 0.2)';

			context.strokeStyle = 'gold';

			function initCircles() {
				if (backContext && context && contextIMG) {
					p = l * r;
					k = r / R;
					let p0: [number, number];
					p0 = [width / 2 + (R - r) + p, height / 2];

					backContext.clearRect(0, 0, width, height);

					backContext.beginPath();
					backContext.arc(width / 2, height / 2, R, 0, Math.PI * 2);
					backContext.stroke();

					backContext.beginPath();
					backContext.arc(
						(R - r) * Math.cos(0) + width / 2,
						(R - r) * Math.sin(0) + height / 2,
						Math.abs(r),
						0,
						Math.PI * 2
					);
					backContext.fill();

					backContext.fillStyle = 'gold';
					backContext.beginPath();
					backContext.arc(...p0, 3, 0, Math.PI * 2);
					backContext.fill();

					backContext.fillStyle = 'rgba(255, 255, 255, 0.2)';
				}
			}

			d3.select('#bigCircle').on('input', () => {
				const node = d3.select('#bigCircle').node() as HTMLInputElement;
				if (node) {
					R = +node.value;
					initCircles();
				}
			});

			d3.select('#smallCircle').on('input', () => {
				const node = d3.select('#smallCircle').node() as HTMLInputElement;
				if (node) {
					r = +node.value;
					initCircles();
				}
			});

			d3.select('#p').on('input', () => {
				const node = d3.select('#p').node() as HTMLInputElement;
				if (node) {
					l = +node.value;
					initCircles();
				}
			});

			d3.select('#loopTime').on('input', () => {
				const node = d3.select('#loopTime').node() as HTMLInputElement;
				if (node) {
					loopTime = +node.value;
					initCircles();
				}
			});

			initCircles();

			d3.selectAll('#draw, #showCircles, #sliders input').attr('disabled', 1);
			t = d3.interval((e) => {
				let a = (e / loopTime) * Math.PI * 2;
				let xy: [number, number] = pinPoint(a);

				if (showCircles == true) {
					backContext.clearRect(0, 0, width, height);

					backContext.beginPath();
					backContext.arc(width / 2, height / 2, R, 0, Math.PI * 2);
					backContext.stroke();

					backContext.beginPath();
					backContext.arc(
						(R - r) * Math.cos(a) + width / 2,
						(R - r) * Math.sin(a) + height / 2,
						Math.abs(r),
						0,
						Math.PI * 2
					);
					backContext.fill();

					backContext.fillStyle = 'gold';
					backContext.beginPath();
					backContext.arc(...xy, 3, 0, Math.PI * 2);
					backContext.fill();

					backContext.fillStyle = 'rgba(255, 255, 255, 0.2)';
				}

				context.beginPath();
				context.moveTo(...p0);
				context.lineTo(...xy);
				context.stroke();

				p0 = xy;
			}, tickTime);
		}
	});
</script>

<div>
	<div class="bg-black relative">
		<canvas id="circle" bind:this={canvasCircle} width="400" height="400" />
		<canvas
			id="spiro"
			bind:this={canvasSpiro}
			width="400"
			height="400"
			class="absolute top-0 left-0"
		/>
		<canvas id="image" bind:this={canvasImage} width="400" height="400" />
	</div>
	Show circles<input type="checkbox" id="showCircles" bind:checked={showCircles} />
	<div id="sliders">
		<div>
			<span>Set outer circle size</span><br />
			<input type="range" min="50" max="190" bind:value={bigCircle} id="bigCircle" />
		</div>
		<div>
			<span>Set inner circle size</span><br />
			<input type="range" min="-100" max="100" bind:value={smallCircle} id="smallCircle" />
		</div>
		<div>
			<span>Set pen position</span><br />
			<input type="range" min="0" max="1" bind:value={pValue} step="any" id="p" />
		</div>
		<div>
			<span>Set duration of one circuit</span><br />
			<input type="range" min="1000" max="5000" bind:value={loopTime} id="loopTime" />
		</div>
	</div>
	<button id="draw">Draw</button>
	<a id="save"><button>Save image*</button></a>
	<button id="reset">Reset</button>
</div>

<style>
	body {
		font-family: Arial, Helvetica, sans-serif;
	}

	#circle {
		position: relative;
		background: black;
	}

	#spiro {
		position: absolute;
		left: 0;
	}

	#image {
		position: absolute;
		display: none;
	}

	#sliders div {
		display: inline-block;
		padding: 10px 5px 5px 0px;
	}

	button {
		margin: 10px 5px 0 0;
		padding: 5px;
		border-radius: 3px;
	}

	#draw {
		background: #419bf9;
		color: white;
	}

	#draw[disabled] {
		background: #97c8fc;
		color: white;
	}

	input[type='checkbox'],
	button {
		cursor: pointer;
	}

	input[type='range'] {
		cursor: ew-resize;
	}

	input[type='checkbox'][disabled],
	button[disabled],
	input[type='range'][disabled] {
		cursor: not-allowed;
	}

	#note {
		opacity: 0.6;
		font: 400 11px system-ui;
	}
</style>
