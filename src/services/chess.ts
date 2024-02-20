import type { PlayerResponse, PlayerStats, RecentGames } from '@/types/chess';

class ChessService {
	private static readonly BASE_URL = 'https://api.chess.com/pub/player/';

	static async getPlayer(username: string): Promise<PlayerResponse> {
		const response = await fetch(`${this.BASE_URL}${username}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	}

	static async getPlayerStats(username: string): Promise<PlayerStats> {
		const response = await fetch(`${this.BASE_URL}${username}/stats`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	}

	static async getRecentGames(): Promise<RecentGames> {
		const response = await fetch(`/api/chess/recent-games`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return await response.json();
	}
}

export default ChessService;
