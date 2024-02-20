<script lang="ts">
	import ChessService from '@/services/chess';
	import { onMount } from 'svelte';

	import RecentGamesUI from './RecentGamesUI.svelte';
	import { unixTimestampToDate } from '@/utils/datetime';

	import type { PlayerResponse, PlayerStats, RecentGames } from '@/types/chess';

	const USER_NAME = 'HoangJr';

	let playerInfo: PlayerResponse | null = null;
	let playerStats: PlayerStats | null = null;
	let recentGames: RecentGames | null = null;

	onMount(async () => {
		[playerInfo, playerStats, recentGames] = await Promise.all([
			ChessService.getPlayer(USER_NAME),
			ChessService.getPlayerStats(USER_NAME),
			ChessService.getRecentGames()
		]);
	});
</script>

{#if playerInfo === null || playerStats === null}
	<div>Loading...</div>
{:else}
	<section class="flex flex-col gap-y-6 px-6 max-h-[calc(100vh-100px)]">
		<div class="card p-6 bg-base-100 rounded-xl shadow-md flex flex-row items-center space-x-4">
			<div class="">
				<img class="h-32 w-32 rounded-md" src={playerInfo.avatar} alt="Chess Player Avatar" />
			</div>
			<div>
				<div class="text-xl font-medium text-accent">{playerInfo.name}</div>
				<p class="text-accent-content">Username: {playerInfo.username}</p>
				<p class="text-accent-content">Followers: {playerInfo.followers}</p>
				<p class="text-accent-content">League: {playerInfo.league}</p>
			</div>
		</div>

		<div class="card p-6 bg-base-100 rounded-xl shadow-md flex flex-row items-center space-x-4">
			<div class="flex flex-col items-center justify-center w-full">
				<span class="text-md font-medium text-accent">Highest Rating </span>
				<span class="text-accent-content text-2xl font-semibold"
					>{playerStats?.chess_rapid?.best?.rating}</span
				>
				<span class="text-accent-content"
					>{unixTimestampToDate(playerStats?.chess_rapid?.best?.date)}</span
				>
			</div>

			<div class="flex flex-col items-center justify-center w-full">
				<span class="text-md font-medium">Send me a challenge</span>
				<button
					class="btn btn-accent"
					on:click={() => {
						// open this in new tab: https://www.chess.com/play/online/new?opponent=HoangJr
						window.open(`https://www.chess.com/play/online/new?opponent=${USER_NAME}`);
					}}
				>
					Challenge
				</button>
			</div>
		</div>

		{#if recentGames === null}
			<div class="card p-6 bg-base-100 rounded-xl shadow-md flex space-x-4">Loading...</div>
		{:else}
			<div class="card p-6 bg-base-100 rounded-xl shadow-md flex space-x-4 overflow-y-scroll">
				<div class="flex flex-col items-center justify-center w-full">
					<RecentGamesUI {recentGames} />
				</div>
			</div>
		{/if}
	</section>
{/if}
