import express, { Response, Request, NextFunction } from 'express';
import passport from 'passport';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import authPassport from './auth/auth';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
import companyRouter from './routes/company';
import orderRouter from './routes/order';
import customerRouter from './routes/customer';
import syncRouter from './routes/sync';

const app = express();

app.use(authPassport.initialize());
app.use(authPassport.session());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const secureRoute = (req, res, next) => {
	passport.authenticate('jwt', { session: false }, (err, user, info) => {
		if (err || !user) {
			// PASS THE ERROR OBJECT TO THE NEXT ROUTE i.e THE APP'S COMMON ERROR HANDLING MIDDLEWARE
			// return next(info);
			throw new Error(info.message);
		}
		req.user = user;
		return next();
	})(req, res, next);
};

app.use('/users', secureRoute, usersRouter);
app.use('/auth', authRouter);
app.use('/companies', secureRoute, companyRouter);
app.use('/orders', orderRouter);
app.use('/customers', customerRouter);
app.use('/sync', syncRouter);

// Error logger
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	// eslint-disable-next-line no-console
	console.error(err.stack);
	next(err);
});

// // Error Handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	const { statusCode } = err;
	res.status(statusCode || 500).send(err);
});
export default app;
