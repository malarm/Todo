import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export = {
	up: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.createTable('order_status', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		type: {
			type: DataTypes.ENUM('Cancel', 'Open', 'Fulfil'),
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
	down: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.dropTable('order_status'),
};
