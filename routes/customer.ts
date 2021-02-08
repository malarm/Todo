import express from 'express';
import * as customerActions from '../controllers/CustomerController';

const router = express.Router();

/* GET users listing. */
router.get('/', customerActions.getAll);

export default router;
