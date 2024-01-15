const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1920px',
				'4xl': '2560px',
				'5xl': '3840px'
			}
		}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
