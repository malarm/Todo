import { QueryInterface, Sequelize } from 'sequelize';

export = {
	up: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
		await queryInterface.bulkInsert('payment_method', [
			{
				id: 1,
				payment_method_title: 'QuickPay',
				payment_method_type: '-',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: 2,
				payment_method_title: 'Bankoverførsel',
				payment_method_type: '-',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: 3,
				payment_method_title: 'Andet',
				payment_method_type: '-',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: 4,
				payment_method_title: 'SparXpress',
				payment_method_type: '-',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: 6,
				payment_method_title: 'PayPal',
				payment_method_type: '-',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: 9,
				payment_method_title: 'Klarna',
				payment_method_type: '-',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: 12,
				payment_method_title: 'Markedsplads',
				payment_method_type: '-',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: 13,
				payment_method_title: 'Markedsplads',
				payment_method_type: '-',
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: async (queryInterface: QueryInterface, sequelize: Sequelize) => {
		await queryInterface.bulkDelete('payment_method', null, {});
	}
};
