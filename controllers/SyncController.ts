import { NextFunction, Request, Response } from 'express';
import { syncOrdersByUpdated } from '../lib/sync/webShopSync';

export const syncOrders = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { date = new Date().toISOString().slice(0, 10) } = req.query;
		const orders = await syncOrdersByUpdated(date.toString());
		return res.status(200).json(orders);
	} catch (error) {
		return next(error);
	}
};
