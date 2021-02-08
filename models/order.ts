import {
	DataTypes, Model, Optional, Sequelize
} from 'sequelize';

export interface OrderAttributes {
	id: number;
	currency: string;
	customerComment: string;
	deliveryName?: string;
	deliveryAttention?: string;
	deliveryAddress?: string;
	deliveryZipCode?: string;
	deliveryCountry?: string;
	deliveryMethod?: string;
	deliveryCost?: string;
	invoiceNumber?: number;
	iso: string;
	orderComment?: string;
	vat: number,
	orderDate: Date;
	orderUpdatedDate: Date;
	orderFulfilledDate: Date;
	dueDate?: Date
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface OrderCreationAttributes extends Optional<OrderAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
interface OrderInstance extends Model<OrderAttributes, OrderCreationAttributes>,
	OrderAttributes {}

  type OrderStatic = typeof Model & {
  	associate?: (models: any) => void
  };

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	const Order = <OrderStatic>sequelize.define<OrderInstance>('order', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		currency: {
			type: dataTypes.ENUM('DKK', 'NOK', 'SEK', 'EUR', 'GBP'),
			allowNull: false,
		},
		customerComment: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		deliveryName: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		deliveryAttention: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		deliveryAddress: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		deliveryZipCode: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		deliveryCountry: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		deliveryMethod: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		deliveryCost: {
			type: dataTypes.BIGINT,
			allowNull: true,
		},
		invoiceNumber: {
			type: dataTypes.INTEGER,
			allowNull: true,
		},
		iso: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		orderComment: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		vat: {
			type: dataTypes.DOUBLE,
			allowNull: false,
		},
		orderDate: {
			allowNull: false,
			type: dataTypes.DATE,
		},
		orderUpdatedDate: {
			allowNull: false,
			type: dataTypes.DATE,
		},
		orderFulfilledDate: {
			allowNull: true,
			type: dataTypes.DATE,
		},
		dueDate: {
			allowNull: true,
			type: dataTypes.DATE,
		},
	}, {
		tableName: 'order',
		underscored: true,
	});

	Order.associate = (models) => {
		Order.hasMany(models.orderLine);
		Order.belongsTo(models.customer);
		Order.belongsTo(models.company);
		Order.belongsTo(models.orderStatus, { foreignKey: 'statusId', targetKey: 'id' });
		Order.belongsTo(models.paymentMethod);
	};
	return Order;
};
