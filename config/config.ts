export const development = {
	username: 'postgres',
	password: 'malarruban',
	database: 'test',
	host: '127.0.0.1',
	dialect: 'postgres'
};

export const test = {
	username: 'root',
	password: null,
	database: 'wnb_test',
	host: '127.0.0.1',
	dialect: 'postgres',
	operatorsAliases: false
};

export const production = {
	username: 'root',
	password: null,
	database: 'wnb_prod',
	host: '127.0.0.1',
	dialect: 'postgres',
	operatorsAliases: false
};
