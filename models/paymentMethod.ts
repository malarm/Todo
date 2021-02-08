import {
	DataTypes, Model, Optional, Sequelize
} from 'sequelize';

interface PaymentMethodAttributes {
	id: number;
	paymentMethodTitle: string;
	paymentMethodType: string;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface PaymentMethodCreationAttributes extends Optional<PaymentMethodAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
interface PaymentMethodInstance extends Model<PaymentMethodAttributes, PaymentMethodCreationAttributes>,
	PaymentMethodAttributes {}

type PaymentMethodStatic = typeof Model & {
	associate?: (models: any) => void
};
export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	const PaymentMethod = <PaymentMethodStatic>sequelize.define<PaymentMethodInstance>('paymentMethod', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		paymentMethodTitle: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		paymentMethodType: {
			type: dataTypes.STRING,
			allowNull: false,
		},
	}, {
		tableName: 'payment_method',
		underscored: true,
	});

	PaymentMethod.associate = (models) => {
		PaymentMethod.hasMany(models.order);
	};

	return PaymentMethod;
};
