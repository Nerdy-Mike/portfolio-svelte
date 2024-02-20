<script lang="ts">
	import { selectedChessGame } from '@/stores/chess-store';

	import MainContainer from '@/components/common/Containers/MainContainer.svelte';
	import Grid2ColContainer from '@/components/common/Containers/Grid2ColContainer.svelte';
	import ComponentContainer from '@/components/common/Containers/ComponentContainer.svelte';

	import Stats from '@/components/Chess/Stats.svelte';
	import ChessBoard from '@/components/Chess/ChessBoard.svelte';

	let slectedFen = '';

	$: if ($selectedChessGame) {
		slectedFen = $selectedChessGame.fen;
	}
</script>

<section class="grid grid-cols-2">
	<div class="col-span-1 flex flex-col items-center justify-center" />
</section>

<MainContainer>
	<Grid2ColContainer>
		<ComponentContainer
			slot="left"
			noBackground
			extraClass="w-full h-full flex items-center justify-center"
		>
			<ChessBoard />
		</ComponentContainer>

		<ComponentContainer slot="right" extraClass="w-full h-full">
			<Stats />
		</ComponentContainer>
	</Grid2ColContainer>
</MainContainer>
