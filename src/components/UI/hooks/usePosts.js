import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
	const sorted = useMemo(() => {
		let sortedPosts = [...posts];

		switch (sort) {
			case 1:
				sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case 2:
				sortedPosts.sort((a, b) => a.body.localeCompare(b.body));
				break;
			default:
				sortedPosts.sort((a, b) => {
					return a.id - b.id;
				});
				break;
		}

		return sortedPosts;
	}, [sort, posts]);
	return sorted;
};

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const filtredPosts = useMemo(() => {
		return [...sortedPosts].filter((post) =>
			query !== ''
				? post.body.toLowerCase().includes(query.toLowerCase())
				: true
		);
	}, [query, sortedPosts]);

	return filtredPosts;
};
