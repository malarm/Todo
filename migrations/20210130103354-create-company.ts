import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export = {
	up: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.createTable('company', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		vat: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		phoneNo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'phone_no',
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
	down: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.dropTable('company'),
};
