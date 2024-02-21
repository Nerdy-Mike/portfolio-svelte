<script lang="ts">
	import { onMount } from 'svelte';

	import { Chess } from 'chess.js';
	import { Chessground } from 'svelte-chessground';

	import { toDests, playOtherSide } from '@/lib/chess/utils';
	import cn from '@/lib/tailwind-merged';

	import { selectedChessGame } from '@/stores/chess-store';

	let slectedFen = '';
	let chessground: Chessground;
	let sideToMove = 'white' as ColorConfig;

	type ColorConfig = 'white' | 'black' | 'both' | undefined;

	let chess = new Chess();
	let config = {
		movable: {
			color: 'white' as ColorConfig,
			free: false,
			dests: toDests(chess)
		}
	};

	onMount(async () => {
		chessground.set({
			movable: { events: { after: playOtherSide(chessground, chess) } }
		});
	});

	$: if ($selectedChessGame) {
		slectedFen = $selectedChessGame.fen;
		// get the side to move from the fen
		chess.load(slectedFen);
		sideToMove = chess.turn() === 'w' ? 'white' : 'black';
		config = {
			movable: {
				color: sideToMove as ColorConfig,
				free: false,
				dests: toDests(chess)
			}
		};
	}
</script>

<div
	class=" w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] 3xl:w-[800px] 3xl:h-[800px] 4xl:w-[1000px] 4xl:h-[1000px]"
>
	<div class={cn('text-center text-lg font-bold', sideToMove == 'black' && 'text-primary')}>
		{$selectedChessGame?.user1.username || 'Anonymous'}
	</div>
	<Chessground bind:this={chessground} fen={slectedFen} {config} />
	<div class={cn('text-center text-lg font-bold', sideToMove == 'white' && 'text-primary')}>
		{$selectedChessGame?.user2.username || 'Anonymous'}
	</div>
</div>
