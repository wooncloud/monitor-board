function elapsedTime(date) {
	const start = new Date(date);
	const end = new Date();

	const diff = (end - start) / 1000;

	const formatter = new Intl.RelativeTimeFormat('ko', {
		numeric: 'auto'
	});

	const times = [
		{ name: 'year', milliSeconds: 60 * 60 * 24 * 365 },
		{ name: 'month', milliSeconds: 60 * 60 * 24 * 30 },
		{ name: 'day', milliSeconds: 60 * 60 * 24 },
		{ name: 'hour', milliSeconds: 60 * 60 },
		{ name: 'minute', milliSeconds: 60 }
	];

	for (const value of times) {
		const betweenTime = Math.floor(diff / value.milliSeconds);

		if (betweenTime > 0) {
			return formatter.format(-betweenTime, value.name);
		}
	}
	return '방금 전';
}

async function selectGuestBook(supabase) {
	let { data: GUEST_BOOK, error } = await supabase
		.from('GUEST_BOOK')
		.select('*')
		.order('created_at', { ascending: false })
		.limit(10);

	if (error) {
		console.error(error);
		return;
	}

	return GUEST_BOOK;
}

export { elapsedTime, selectGuestBook };
