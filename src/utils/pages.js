export const getPagesCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
	let pagingArray = [];
	for (let i = 0; i < totalPages; i++) {
		pagingArray.push(i + 1);
	}
	return pagingArray;
};
