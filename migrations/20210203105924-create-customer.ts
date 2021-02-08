import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export = {
	up: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.createTable('customer', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'first_name',
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'last_name'
		},
		address1: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'address_1',
		},
		address2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'address_2',
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		mobile: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		zipCode: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'zip_code',
		},
		country: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		countryCode: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'country_code',
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			field: 'created_at',
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
			field: 'updated_at',
		},
	}),
	down: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.dropTable('customer'),
};
