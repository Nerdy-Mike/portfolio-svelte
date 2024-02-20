export interface Rating {
	rating: number;
	date: number;
	rd?: number;
	game?: string;
}

export interface Record {
	win: number;
	loss: number;
	draw: number;
	time_per_move?: number;
	timeout_percent?: number;
}

export interface ChessType {
	last: Rating;
	best: Rating;
	record: Record;
}

export interface Tactics {
	highest: Rating;
	lowest: Rating;
}

export interface PuzzleRush {
	best: {
		total_attempts: number;
		score: number;
	};
}

export interface PlayerStats {
	chess_daily: ChessType;
	chess_rapid: ChessType;
	chess_bullet: ChessType;
	chess_blitz: ChessType;
	fide: number;
	tactics: Tactics;
	puzzle_rush: PuzzleRush;
}

export interface PlayerResponse {
	avatar: string;
	player_id: number;
	'@id': string;
	url: string;
	name: string;
	username: string;
	followers: number;
	country: string;
	last_online: number;
	joined: number;
	status: string;
	is_streamer: boolean;
	verified: boolean;
	league: string;
}

export interface GameType {
	name: string;
	code: string;
	isChess960: boolean;
	isKingOfTheHill: boolean;
	isThreeCheck: boolean;
	isBughouse: boolean;
	isCrazyHouse: boolean;
}

export interface User {
	id: number;
	title: string | null;
	username: string;
	countryId: number;
	countryName: string;
	membershipLevel: number;
	flairCode: string;
}

export interface Game {
	id: number;
	fen: string;
	daysPerTurn: number;
	moves: number;
	user1Rating: number;
	user2Rating: number;
	user1Result: number;
	user2Result: number;
	isTournament: boolean;
	isTeamMatch: boolean;
	highlightSquares: string;
	gameEndTime: string;
	isTimeout: boolean;
	isLive: boolean;
	isVsComputer: boolean;
	gameType: GameType;
	gameTimeClass: string;
	baseTime1: number;
	timeIncrement: number;
	user1: User;
	user2: User;
	isArena: boolean;
	user1Accuracy: number;
	user2Accuracy: number;
}

export type RecentGames = Game[];
