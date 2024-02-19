import fs from 'fs';
import path from 'path';
import type { RequestEvent } from '@sveltejs/kit';

import { json } from '@sveltejs/kit';

export async function POST(requestEvent: RequestEvent) {
	const { request } = requestEvent;

	// get body from request
	const body = await request.json();
	const folder = body.folder;

	// project/dulux -> access to the folder: src/assets/images/project/dulux
	try {
		const folderPath = path.join('src/assets', folder);
		const files = fs.readdirSync(folderPath);
		const images = files.map((file) => {
			const filePath = path.join(folderPath, file);
			const fileData = fs.readFileSync(filePath);
			const base64Image = Buffer.from(fileData).toString('base64');
			return base64Image;
		});
		return json({ status: 200, body: { images } });
	} catch (error) {
		return json({ status: 500, body: { message: 'Error reading folder' } });
	}
}
