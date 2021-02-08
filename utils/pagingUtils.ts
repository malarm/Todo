interface PaginatedResult {
	count: number;
	rows: Array<any>;
}
export const getPagination = (page?: string, size?: string) => {
	const limit = size ? +size : 10;
	const offset = page ? (+page - 1) * limit : 0;

	return { limit, offset };
};

export const getPagingData = (result: PaginatedResult, page: string, limit: number) => {
	const { count, rows: data } = result;
	const currentPage = page ? +page : 1;
	const totalPages = Math.ceil(count / limit);

	return {
		count, data, totalPages, currentPage
	};
};
