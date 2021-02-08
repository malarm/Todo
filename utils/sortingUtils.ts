import { OrderItem } from 'sequelize/types';

export const getSortCriteria = (sortBy?: string, sort: string = 'asc'): Array<OrderItem> => {
	if (sortBy && sortBy !== '') {
		return [[sortBy, sort === 'asc' ? 'ASC' : 'DESC']];
	}

	return [];
};
