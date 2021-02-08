import {
	DataTypes, Model, Optional, Sequelize
} from 'sequelize';

export interface CustomerAttributes {
	id: number;
	firstName: string;
	lastName: string;
	address1: string;
	address2?: string;
	email: string;
	mobile: string;
	city: string;
	zipCode: string;
	country: string;
	countryCode: number;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
interface CustomerInstance extends Model<CustomerAttributes, CustomerCreationAttributes>,
	CustomerAttributes {}

  type CustomerStatic = typeof Model & {
  	associate?: (models: any) => void
  };

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	const Customer = <CustomerStatic>sequelize.define<CustomerInstance>('customer', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		firstName: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		address1: {
			type: dataTypes.STRING,
			allowNull: false,
			field: 'address_1',
		},
		address2: {
			type: dataTypes.STRING,
			allowNull: true,
			field: 'address_2',
		},
		email: {
			type: dataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		mobile: {
			type: dataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		city: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		zipCode: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		country: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		countryCode: {
			type: dataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		tableName: 'customer',
		underscored: true,
	});

	Customer.associate = (models) => Customer.hasMany(models.order);

	return Customer;
};
