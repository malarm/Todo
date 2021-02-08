import {
	DataTypes, Model, Optional, Sequelize
} from 'sequelize';

interface UserAttributes {
	id: number;
	name: string;
	initialName: string;
	email: string;
	phone: string;
	jobTitle: string;
	officeLocation: string;
	preferredLanguage: string;
	active: boolean;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance extends Model<UserAttributes, UserCreationAttributes>,
	UserAttributes {}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	const User = sequelize.define<UserInstance>('user', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		name: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		initialName: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		jobTitle: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		officeLocation: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		preferredLanguage: {
			type: dataTypes.STRING,
			allowNull: true,
		},
		active: {
			type: dataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
	}, {
		tableName: 'user',
		underscored: true,
	});

	return User;
};
