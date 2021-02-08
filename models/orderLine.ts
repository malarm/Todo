import {
	DataTypes, Model, Optional, Sequelize
} from 'sequelize';

export interface OrderLineAttributes {
	id: number;
	itemNumber: string;
	amount: number;
	price: number;
	discount?: number;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface OrderLineCreationAttributes extends Optional<OrderLineAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
interface OrderLineInstance extends Model<OrderLineAttributes, OrderLineCreationAttributes>,
	OrderLineAttributes {
}

export type OrderLineStatic = typeof Model & {
	associate?: (models: any) => void
};

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	const OrderLine = <OrderLineStatic>sequelize.define<OrderLineInstance, OrderLineAttributes>('orderLine', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		itemNumber: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		amount: {
			type: dataTypes.BIGINT,
			allowNull: false,
		},
		price: {
			type: dataTypes.BIGINT,
			allowNull: false,
		},
		discount: {
			type: dataTypes.BIGINT,
			allowNull: true,
		},
	}, {
		tableName: 'order_line',
		underscored: true,
	});

	OrderLine.associate = (models) => {
		OrderLine.belongsTo(models.order);
	};

	return OrderLine;
};
