import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export = {
	up: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
		await queryInterface.sequelize.transaction(async (t) => {
			await queryInterface.renameColumn('order', 'status', 'status_id', { transaction: t });
			await queryInterface.changeColumn('order', 'status_id', {
				type: `${DataTypes.INTEGER} USING CAST("status_id" as ${DataTypes.INTEGER})`,
				allowNull: false,
				field: 'status_id',
			}, { transaction: t });

			await queryInterface.addColumn('order', 'due_date', {
				type: DataTypes.DATE,
				allowNull: true,
				field: 'due_date',
			}, { transaction: t });
		});

		await queryInterface.addConstraint('order', {
			type: 'foreign key', fields: ['status_id'], name: 'order_status_id_order_status_fk', references: { table: 'order_status', field: 'id' }, onDelete: 'CASCADE', onUpdate: 'CASCADE',
		});
	},

	down: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
		await queryInterface.removeConstraint('order', 'order_status_id_order_status_fk');
		await queryInterface.sequelize.transaction(async (t) => {
			await queryInterface.removeColumn('order', 'due_date', { transaction: t });
			await queryInterface.renameColumn('order', 'status_id', 'status', { transaction: t });
			await queryInterface.changeColumn('order', 'status', {
				type: DataTypes.STRING,
				allowNull: false
			}, { transaction: t });
		});
	},
};
