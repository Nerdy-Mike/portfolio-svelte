import { writable } from 'svelte/store';

import type { Game } from '@/types/chess';

const selectedChessGame = writable<Game | null>();

const selectChessGame = (game: Game) => {
	selectedChessGame.update(() => game);
};

export { selectedChessGame, selectChessGame };
