export function unixTimestampToDate(timestamp: number): string {
	if (timestamp === null || timestamp === undefined) {
		return new Date().toLocaleDateString('en-US', {
			month: 'short',
			day: '2-digit',
			year: 'numeric'
		});
	}
	return new Date(timestamp * 1000).toLocaleDateString('en-US', {
		month: 'short',
		day: '2-digit',
		year: 'numeric'
	});
}
