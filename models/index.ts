import { Sequelize, DataTypes } from 'sequelize';
import user from './user';
import company from './company';
import * as configs from '../config/config';
import order from './order';
import customer from './customer';
import paymentMethod from './paymentMethod';
import orderStatus from './orderStatus';
import orderLine from './orderLine';

const env = process.env.NODE_ENV || 'development';
const config = configs[env];

let sequelize: Sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = {
	user: user(sequelize, DataTypes),
	company: company(sequelize, DataTypes),
	orderStatus: orderStatus(sequelize, DataTypes),
	customer: customer(sequelize, DataTypes),
	paymentMethod: paymentMethod(sequelize, DataTypes),
	order: order(sequelize, DataTypes),
	orderLine: orderLine(sequelize, DataTypes),
};

const db = {
	...models,
	sequelize,
	Sequelize
};

Object.keys(models).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

export default db;
