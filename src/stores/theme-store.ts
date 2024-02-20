import { writable } from 'svelte/store';

type Theme = 'dark' | 'forest' | 'aqua';
export type Themes = Theme[];

export const THEMES = [
	'dark', // night sky
	'forest', // forest - done
	'aqua' // ocean
] as Themes;

const theme = writable(THEMES[0]);

const setTheme = (newTheme: Theme) => {
	theme.update(() => newTheme);
	localStorage.setItem('theme', newTheme);
};

const getTheme = () => {
	const localTheme = localStorage.getItem('theme') as Theme;
	if (localTheme) {
		theme.update(() => localTheme);
	} else {
		localStorage.setItem('theme', THEMES[0]);
		return THEMES[0];
	}
	return localTheme;
};

export { theme, setTheme, getTheme };
