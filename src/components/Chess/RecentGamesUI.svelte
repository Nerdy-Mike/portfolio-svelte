<script lang="ts">
	import { selectChessGame } from '@/stores/chess-store';

	import type { RecentGames } from '@/types/chess';

	export let recentGames: RecentGames;

	// sort the recent games by gameTimeClass, standard first then blitz, bullet
	recentGames.sort((a, b) => {
		if (a.gameTimeClass === 'standard' && b.gameTimeClass !== 'standard') {
			return -1;
		}
		if (a.gameTimeClass !== 'standard' && b.gameTimeClass === 'standard') {
			return 1;
		}
		return 0;
	});
</script>

<table class="table-auto w-full">
	<thead>
		<tr>
			<th class="px-4 py-2">Players</th>
			<th class="px-4 py-2">Accuracy</th>
			<th class="px-4 py-2">Moves</th>
		</tr>
	</thead>
	<tbody class="">
		{#each recentGames as game (game.id)}
			<tr
				class=" bg-base-300 border-b border-base-100 cursor-pointer"
				on:click={() => selectChessGame(game)}
			>
				<td class=" px-4 py-4">
					<div class="font-semibold">
						{game.user1.username} ({game.user1Rating})
					</div>
					<div class="font-semibold">
						{game.user2.username} ({game.user2Rating})
					</div>
				</td>

				<td class=" px-4 py-2 flex flex-col items-center justify-center pt-4">
					<div>
						{game.user1Accuracy}
					</div>
					<div>
						{game.user2Accuracy}
					</div>
				</td>
				<td class=" px-4 py-2">
					<div class=" flex flex-col items-center justify-center">
						{game.moves}
					</div>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
