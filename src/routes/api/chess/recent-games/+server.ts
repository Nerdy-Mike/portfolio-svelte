import type { RequestEvent } from '@sveltejs/kit';

import { json } from '@sveltejs/kit';

const CALL_BACK_URL = 'https://www.chess.com/callback/';

export async function GET(requestEvent: RequestEvent) {
	const response = await fetch(`${CALL_BACK_URL}user/games?locale=en_US&all=1&userId=73640456`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return json(await response.json());
}
