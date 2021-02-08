import { NextFunction, Request, Response } from 'express';
import { notFound, internal } from '@jdpnielsen/http-error';
import { getSortCriteria } from 'utils/sortingUtils';
import { Buffer } from 'buffer';
import db from '../models/index';
import { getPagination, getPagingData } from '../utils/pagingUtils';

export const getAllCompanies = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const {
			page, size, sortBy, orderBy, filter
		} = req.query;
		// const filter = { name: 'abcd' };
		// const base64Str = Buffer.from(JSON.stringify(filter)).toString('base64');
		// const where = JSON.parse(Buffer.from(filter as string, 'base64').toString('utf-8'));
		const { limit, offset } = getPagination(page as string, size as string);
	  const order = getSortCriteria(sortBy as string, orderBy as string);
		const companyList = await db.company.findAndCountAll({
			limit, offset, order, // where
		});
		const response = getPagingData(companyList, page as string, limit);
		return res.status(200).json(response);
	} catch (error) {
		return next(error);
	}
};

export const getCompany = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const company = await db.company.findByPk(id);
		if (!company) {
			throw notFound(`Company id - ${id} not Found`);
		}
		return res.status(200).json(company);
	} catch (error) {
		return next(error);
	}
};

export const createCompany = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body } = req;
		const company = await db.company.create(body);
		return res.status(201).json(company);
	} catch (error) {
		return next(error);
		// throw internal('Error creating Company', { cause: error });
	}
};

export const updateCompany = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body } = req;
		const { id } = req.params;
		const [rowsUpdated, updatedValues] = await db.company.update(body, { where: { id }, returning: true });
		return res.status(200).json(rowsUpdated === 1 ? updatedValues[0] : {});
	} catch (error) {
		return next(error);
	}
};

export const removeCompany = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		await db.company.destroy({ where: { id } });
		return res.status(200).json({});
	} catch (error) {
		return next(error);
	}
};
