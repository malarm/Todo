import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export = {
	up: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.createTable('order_line', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		itemNumber: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'item_number',
		},
		amount: {
			type: DataTypes.BIGINT,
			allowNull: false,
		},
		price: {
			type: DataTypes.BIGINT,
			allowNull: false,
		},
		discount: {
			type: DataTypes.BIGINT,
			allowNull: true,
		},
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'order',
				key: 'id'
			},
			field: 'order_id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
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
	down: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.dropTable('order_line'),
};
