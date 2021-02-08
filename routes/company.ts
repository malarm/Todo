import express from 'express';
import * as companyActions from '../controllers/CompanyController';

const router = express.Router();

/* GET company listing. */
router.get('/', companyActions.getAllCompanies);
router.get('/:id', companyActions.getCompany);
router.post('/', companyActions.createCompany);
router.put('/:id', companyActions.updateCompany);
router.delete('/:id', companyActions.removeCompany);

export default router;
