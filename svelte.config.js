import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'@/lib': 'src/lib/*',
			'@/utils': 'src/utils/*',
			'@/types': 'src/types/*',
			'@/routes': 'src/routes/*',
			'@/assets': 'src/assets/*',
			'@/stores': 'src/stores/*',
			'@/services': 'src/services/*',
			'@/components': 'src/components/*'
		}
	}
};

export default config;
