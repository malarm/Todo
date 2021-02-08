import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export = {
	up: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.createTable('user', {
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
		initialName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'initial_name',
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		jobTitle: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'job_title',
		},
		officeLocation: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'office_location',
		},
		preferredLanguage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'preferred_language',
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
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
	down: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.dropTable('user'),
};
