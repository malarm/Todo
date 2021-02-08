import { ETXTBSY } from 'constants';
import { NextFunction, Request, Response } from 'express';
import { Op, Sequelize } from 'sequelize';
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
			page, size, sortBy, sort, search, iso, status, startDate, endDate
		} = req.query;
		let startDateVal;
		let endDateVal;
		let where = {} as any;
		const { limit, offset } = getPagination(page?.toString(), size?.toString());
		const order = getSortCriteria(sortBy?.toString(), sort?.toString());
		if (startDate && !endDate) {
			startDateVal = new Date(startDate.toString());
			endDateVal = new Date();
		} else {
			endDateVal = new Date();
			startDateVal = new Date().setFullYear(endDateVal.getFullYear() - 1);
		}
		where.orderDate = {
			[Op.between]: [startDateVal, endDateVal]
		};
		if (iso && iso?.toString() !== '') {
			where.iso = iso?.toString();
		}
		if (status && status?.toString() !== '') {
			where.statusId = parseInt(status?.toString());
		}
		let custSearchCond: any = {};
		if (search && search?.toString() !== '') {
			custSearchCond = {
				[Op.or]: [
					{
						email: { [Op.iLike]: `%${search.toString()}%` }
					},
					{
						mobile: { [Op.iLike]: `%${search.toString()}%` }
					},
				]
			};

			const searchCond: any = {
				[Op.or]: [
					{
						id: parseInt(search.toString()) || -1
					},
					{
						customerId: parseInt(search.toString()) || -1
					},
					Sequelize.literal(`customer.mobile ilike '%${search.toString()}%'`),
					Sequelize.literal(`customer.email ilike '%${search.toString()}%'`)
				]
			};
			where = { ...where, ...searchCond };
		}

		const orderList = await db.order.findAndCountAll({
			include: [{ model: db.orderLine }, { model: db.paymentMethod }, { model: db.orderStatus }, { model: db.customer, required: true, all: true }, { model: db.company }],
			limit,
			offset,
			order,
			where,
		});
		const response = getPagingData(orderList, page as string, limit);
		return res.status(200).json(response);
	} catch (error) {
		return next(error);
	}
};
