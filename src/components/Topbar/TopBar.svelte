<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	import { openSidebar } from '../../stores/side-bar-store';

	const themes = [
		'dark', // night sky
		'synthwave', // retro - done
		'forest', // forest - done
		'aqua', // ocean
		'night' // city - - manhattan at night
	];

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};
</script>

<header class="h-16 relative w-full z-10 flex flex-row justify-between items-center">
	<div class="flex items-center h-full">
		<div class="-ml-20 scale-[40%] 2xl:-ml-2 4xl:-ml-1 2xl:scale-[60%]">
			<svg
				width="429"
				height="34.14424810963878"
				viewBox="0 0 349.99999999999994 27.85661267686147"
				class="looka-1j8o68f"
				><defs id="SvgjsDefs2762" /><g
					id="SvgjsG2763"
					transform="matrix(0.9584939556746689,0,0,0.9584939556746689,0.4680319945245631,-10.858778477227494)"
					fill="#FFF"
					><path
						d="M26.211 29.141 l0 11.25 l-5.6055 0 l0 -1.582 l0 0 l0 -9.668 l5.6055 0 z M21.582 20.098 l-8.7109 10.645 l-7.7344 -9.4531 l0 19.102 l-5.625 0 l0 -28.145 l5.3906 0 l7.9688 9.7461 l8.7109 -10.664 l0 8.7695 z M46.01562625 12.245999999999999 l5.625 0 l0 28.145 l-5.625 0 l0 -28.145 z M77.26566875 40.39063 q-2.4609375 0 -4.19921875 -1.73828125 q-1.69921875 -1.69921875 -1.69921875 -4.08203125 l0 -16.484 q0 -2.3828125 1.71875 -4.1015625 t4.1797 -1.7188 l11.582 0 q2.48046875 0 4.19921875 1.7578125 q1.69921875 1.6796875 1.69921875 4.0625 l0 4.0039 l-5.6055 0 l0 -4.0039 q0 -0.1953125 -0.1171875 -0.29296875 q-0.09765625 -0.09765625 -0.17578125 -0.09765625 l-11.582 0 q-0.078125 0 -0.1953125 0.1171875 q-0.078125 0.078125 -0.078125 0.2734375 l0 16.484 q0 0.21484375 0.09765625 0.33203125 q0.078125 0.05859375 0.17578125 0.05859375 l11.582 0 q0.09765625 0 0.17578125 -0.078125 q0.1171875 -0.1171875 0.1171875 -0.3125 l0 -3.9648 l5.6055 0 l0 3.9648 q0 2.3828125 -1.69921875 4.08203125 q-1.71875 1.73828125 -4.19921875 1.73828125 l-11.582 0 z M114.5507825 12.265999999999998 l5.625 0 l0 28.125 l-5.625 0 l0 -28.125 z M137.7540625 12.245999999999999 l0 28.125 l-5.6055 0 l0 -11.348 l-10.313 0 l0 -5.4297 l10.313 0 l0 -11.348 l5.6055 0 z M186.93346875 40.39063 l-6.2305 0 l-1.875 -3.8672 l-11.777 0 l2.6367 -5.4297 l6.4844 0 l-4.0039 -8.2031 l-8.5547 17.5 l-6.2305 0 l14.785 -28.77 z M224.04271875 29.043 l-11.816 0 l0 -5.4297 l11.816 0 l0 5.4297 z M228.63271875 12.265999999999998 l0 5.4297 l-17.715 0 l0 17.266 l17.715 0 l0 5.4297 l-23.34 0 l-0.019531 -28.125 l23.359 0 z M248.339845 34.9609 l18.906 0 l0 5.4297 l-18.906 0 l0 -5.4297 z M248.339845 12.265999999999998 l5.625 0 l0 21.152 l-5.625 0 l0 -21.152 z M302.5976575 34.9609 l18.906 0 l0 5.4297 l-18.906 0 l0 -5.4297 z M302.5976575 12.265999999999998 l5.625 0 l0 17.832 l-5.625 0 l0 -17.832 z M360.077875 29.043 l-11.816 0 l0 -5.4297 l11.816 0 l0 5.4297 z M364.667875 12.265999999999998 l0 5.4297 l-17.715 0 l0 17.266 l17.715 0 l0 5.4297 l-23.34 0 l-0.019531 -28.125 l23.359 0 z"
					/></g
				></svg
			>
		</div>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 z-50">
			<li>
				<button> Set Theme 🎨 </button>
				<ul class="p-2 bg-base-100 w-full max-h-96 overflow-y-scroll">
					<form method="POST" use:enhance={submitUpdateTheme}>
						{#each themes as theme}
							<li>
								<button formaction="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
									>{theme}</button
								>
							</li>
						{/each}
					</form>
				</ul>
			</li>
		</ul>
	</div>
</header>
