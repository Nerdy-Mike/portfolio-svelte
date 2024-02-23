


class PriorityQueue {
	constructor(comparator = (a, b) => a - b) {
		this.queue = [];
		this.comparator = comparator;
	}

	enqueue(item) {
		if (!this.queue.length) {
			this.queue.push(item);
		} else {
			let added = false;
			for (let i = 0; i < this.queue.length; i++) {
				if (this.comparator(item, this.queue[i]) < 0) {
					this.queue.splice(i, 0, item);
					added = true;
					break;
				}
			}
			if (!added) {
				this.queue.push(item);
			}
		}
	}

	dequeue() {
		return this.queue.shift();
	}

	isEmpty() {
		return !this.queue.length;
	}
}

export function bfs(grid, start, end) {
	// // Step 1: Find the starting and ending positions
	// const start = [];
	// const end = [];
	// for (let row = 0; row < grid.length; row++) {
	// 	for (let col = 0; col < grid[row].length; col++) {
	// 		if (grid[row][col] === 'a') {
	// 			start.push(row, col);
	// 		} else if (grid[row][col] === 'b') {
	// 			end.push(row, col);
	// 		}
	// 	}
	// }

	// Step 2: Initialize the queue and visited set
	const queue = [start];
	const visited = new Set([start.join(',')]);
	const parent = new Map();
	parent.set(start.join(','), null);

	// Step 3: Perform BFS
	while (queue.length > 0) {
		const [row, col] = queue.shift();

		// Step 4: Check if the current cell is the destination
		if (row === end[0] && col === end[1]) {
			break;
		}

		// Step 5: Explore neighboring cells
		const neighbors = [
			[row - 1, col],
			[row + 1, col],
			[row, col - 1],
			[row, col + 1]
		];

		for (const [neighborRow, neighborCol] of neighbors) {
			// Step 6: Check if the neighbor is within the grid boundaries and not visited
			if (
				neighborRow >= 0 &&
				neighborRow < grid.length &&
				neighborCol >= 0 &&
				neighborCol < grid[0].length &&
				!visited.has([neighborRow, neighborCol].join(','))
			) {
				queue.push([neighborRow, neighborCol]);
				visited.add([neighborRow, neighborCol].join(','));
				parent.set([neighborRow, neighborCol].join(','), [row, col].join(','));
			}
		}
	}

	// Step 7: Reconstruct the shortest path
	const path = [];
	let current = end.join(',');
	while (current !== null) {
		path.unshift(current);
		current = parent.get(current);
	}

	return path.map((coords) => coords.split(',').map(Number));
}

export function dijkstra(grid) {
	// Step 1: Find the starting and ending positions
	const start = [];
	const end = [];
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			if (grid[row][col] === 'a') {
				start.push(row, col);
			} else if (grid[row][col] === 'b') {
				end.push(row, col);
			}
		}
	}

	// Step 2: Initialize distances and previous nodes
	const distances = new Map();
	const previous = new Map();
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[row].length; col++) {
			distances.set(`${row},${col}`, Infinity);
			previous.set(`${row},${col}`, null);
		}
	}
	distances.set(`${start[0]},${start[1]}`, 0);

	// Step 3: Initialize the priority queue
	const pq = new PriorityQueue((a, b) => a[1] - b[1]);
	pq.enqueue([`${start[0]},${start[1]}`, 0]);

	// Step 4: Dijkstra's algorithm
	while (!pq.isEmpty()) {
		const [currentNode, currentDistance] = pq.dequeue();
		const [row, col] = currentNode.split(',').map(Number);

		// Step 5: If the destination is reached, break the loop
		if (row === end[0] && col === end[1]) {
			break;
		}

		// Step 6: Check neighbors
		const neighbors = [
			[`${row - 1},${col}`, 1],
			[`${row + 1},${col}`, 1],
			[`${row},${col - 1}`, 1],
			[`${row},${col + 1}`, 1]
		];

		for (const [neighbor, weight] of neighbors) {
			const [neighborRow, neighborCol] = neighbor.split(',').map(Number);

			// Step 7: Check if the neighbor is within grid boundaries
			if (
				neighborRow >= 0 &&
				neighborRow < grid.length &&
				neighborCol >= 0 &&
				neighborCol < grid[0].length
			) {
				const newDistance = currentDistance + weight;

				// Step 8: Update distances and previous nodes if a shorter path is found
				if (newDistance < distances.get(neighbor)) {
					distances.set(neighbor, newDistance);
					previous.set(neighbor, currentNode);
					pq.enqueue([neighbor, newDistance]);
				}
			}
		}
	}

	// Step 9: Reconstruct the shortest path
	const path = [];
	let current = `${end[0]},${end[1]}`;
	while (current !== null) {
		path.unshift(current);
		current = previous.get(current);
	}

	return path.map((coords) => coords.split(',').map(Number));
}


