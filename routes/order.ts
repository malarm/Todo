import express from 'express';
import * as orderActions from '../controllers/OrderController';

const router = express.Router();

/* GET users listing. */
router.get('/', orderActions.getAll);

export default router;
