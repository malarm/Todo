import { NextFunction, Request, Response } from 'express';
import db from '../models/index';

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email } = req.body;
		const user = await db.user.findOne({ where: { email } });

		if (user) {
			return res.status(200).send(user);
		}

		const newUser = await db.user.create(req.body);

		return res.status(200).send(newUser);
	} catch (error) {
		return next(error);
	}
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const userList = await db.user.findAll();
		return res.status(200).json(userList);
	} catch (error) {
		return next(error);
	}
};
