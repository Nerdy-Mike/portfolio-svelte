import { promises as fs } from 'fs';
import { json } from '@sveltejs/kit';
import path from 'path';

function slugFromPath(pathInput: string): string {
	// Use Node's path module to get the basename of the path
	const basename = path.basename(pathInput);

	// Remove the file extension and replace any non-alphanumeric characters with hyphens
	const slug = basename
		.replace(/\.[^/.]+$/, '')
		.replace(/[^a-z0-9]/gi, '-')
		.toLowerCase();

	return slug;
}

export async function GET(request) {
	// const folderPath = path.join(process.cwd(), 'src/assets/projects/dulux');
	const modules = import.meta.glob('@/assets/projects/dulux/*.*');

	const postPromises = [];

	for (let [path, resolver] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const promise = resolver().then((post) => ({
			slug,
			imagePath: path,
			...post.metadata
		}));

		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);

	return json({ status: 200, body: { posts } });

	// try {
	// 	const files = await fs.readFile(process.cwd() + '/src/assets/projects/dulux', 'utf-8');
	// 	console.log(files);

	// 	const images = files.map((file) => {
	// 		return {
	// 			name: file,
	// 			path: `/assets/projects/dulux/${file}`
	// 		};
	// 	});
	// 	return json({ status: 200, body: { images } });
	// } catch (error) {
	// 	return json({ status: 500, body: { message: `${error}` } });
	// }
}
