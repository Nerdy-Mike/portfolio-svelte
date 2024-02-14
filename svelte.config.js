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
			'@/types': 'src/types/*',
			'@/components': 'src/components/*',
			'@/stores': 'src/stores/*',
			'@/lib': 'src/lib/*',
			'@/assets': 'src/assets/*'
		}
	}
};

export default config;
