import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import authConfig from '../auth/authConfig';

const router = express.Router();

router.get('/', passport.authenticate('azure_ad_oauth2'));

router.get('/redirect', passport.authenticate('azure_ad_oauth2', { failureRedirect: '/auth/failure', session: false }),
	async (req: any, res: Response, next: NextFunction) => {
		const { dataValues: user } = req.user;
		const body = {
			id: user.id,
			email: user.email,
			name: user.name,
			initialName: user.initialName,
			phone: user.phone,
			jobTitle: user.jobTitle,
			officeLocation: user.officeLocation,
			preferredLanguage: user.preferredLanguage,
			roles: [],
		};
		const expiresAt = Math.floor(Date.now() / 1000) + (600);

		const token = jwt.sign({ user: body, exp: expiresAt }, authConfig.tokenSecret);
		res.writeHead(301, { Location: `${authConfig.authCallbackUrl}?token=${token}` });
		return res.end();
	});

router.get('/failure', async (req: Request, res: Response, next: NextFunction) => {
	res.status(500);
	res.json('Failure');
});

export default router;
