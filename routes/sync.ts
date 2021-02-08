import express from 'express';
import * as syncActions from '../controllers/SyncController';

const router = express.Router();

/* GET users listing. */
router.post('/orders', syncActions.syncOrders);

export default router;
