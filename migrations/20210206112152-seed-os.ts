import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export = {
	up: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
		await queryInterface.bulkInsert('order_status', [{
			id: 0,
			title: 'Not Received',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 1,
			title: 'Order Received',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 2,
			title: 'Processing',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 3,
			title: 'Order Sent',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 4,
			title: 'Reopen',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 5,
			title: 'Cancelled',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 6,
			title: 'Ready For Pickup',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 7,
			title: 'Partially Sent',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 8,
			title: 'Picked up',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 99,
			title: 'Draft',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		},
		{
			id: 100,
			title: 'credit note',
			type: 'Open',
			created_at: new Date(),
			updated_at: new Date(),
		}
		]);
	},

	down: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
		await queryInterface.bulkDelete('order_status', null, {});
	}
};
