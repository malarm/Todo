import express from 'express';
import * as userActions from '../controllers/UserController';

const router = express.Router();

/* GET users listing. */
router.post('/authenticate', userActions.authenticateUser);
router.get('/', userActions.getAllUsers);

export default router;
