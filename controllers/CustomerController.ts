import { NextFunction, Request, Response } from 'express';
import { Op } from 'sequelize';
import db from '../models/index';
import { getPagination, getPagingData } from '../utils/pagingUtils';
import { getSortCriteria } from '../utils/sortingUtils';

export const getAll = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const {
			page, size, sortBy, sort, search, country
		} = req.query;
		let where = {} as any;
		const { limit, offset } = getPagination(page?.toString(), size?.toString());
		const order = getSortCriteria(sortBy?.toString(), sort?.toString());
		if (country && country?.toString() !== '') {
			where.country = country?.toString();
		}
		if (search && search?.toString() !== '') {
			const searchCond: any = {
				[Op.or]: [
					{
						firstName: { [Op.iLike]: `%${search.toString()}%` }
					},
					{
						email: { [Op.iLike]: `%${search.toString()}%` }
					}
				]
			};
			where = { ...where, ...searchCond };
		}
		const customerList = await db.customer.findAndCountAll({
			include: [{ model: db.order }],
			limit,
			offset,
			order,
			where,
		});
		const response = getPagingData(customerList, page as string, limit);
		return res.status(200).json(response);
	} catch (error) {
		return next(error);
	}
};
