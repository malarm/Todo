import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

export = {
	up: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.createTable('order', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		customerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'customer',
				key: 'id'
			},
			field: 'customer_id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'company',
				key: 'id'
			},
			field: 'company_id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
		paymentMethodId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'payment_method',
				key: 'id'
			},
			field: 'payment_method_id',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		},
		currency: {
			type: DataTypes.ENUM('DKK', 'NOK', 'SEK', 'EUR', 'GBP'),
			allowNull: false,
		},
		customerComment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'customer_comment',
		},
		deliveryName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'delivery_name',
		},
		deliveryAttention: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'delivery_attention',
		},
		deliveryAddress: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'delivery_address',
		},
		deliveryZipCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'delivery_zip_code',
		},
		deliveryCountry: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'delivery_country',
		},
		deliveryMethod: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'delivery_method',
		},
		deliveryCost: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'delivery_cost',
		},
		invoiceNumber: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'invoice_number',
		},
		iso: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		orderComment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'order_comment',
		},
		vat: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		orderDate: {
			allowNull: false,
			type: DataTypes.DATE,
			field: 'order_date',
		},
		orderUpdatedDate: {
			allowNull: false,
			type: DataTypes.DATE,
			field: 'order_updated_date',
		},
		orderFulfilledDate: {
			allowNull: true,
			type: DataTypes.DATE,
			field: 'order_fulfilled_date',
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
	down: (queryInterface: QueryInterface, sequelize: Sequelize) => queryInterface.dropTable('order'),
};
