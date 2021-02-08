import {
	DataTypes, Model, Optional, Sequelize
} from 'sequelize';

interface CompanyAttributes {
	id: number;
	name: string;
	address: string;
	vat: number;
	phoneNo: string;
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
interface CompanyInstance extends Model<CompanyAttributes, CompanyCreationAttributes>,
	CompanyAttributes {}

  type CompanyStatic = typeof Model & {
  	associate?: (models: any) => void
  };

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
	const Company = <CompanyStatic>sequelize.define<CompanyInstance>('company', {
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
		address: {
			type: dataTypes.STRING,
			allowNull: false,
		},
		vat: {
			type: dataTypes.DOUBLE,
			allowNull: false,
		},
		phoneNo: {
			type: dataTypes.STRING,
			allowNull: false,
		}
	}, {
		tableName: 'company',
		underscored: true,
	});

	Company.associate = (models) => Company.hasMany(models.order);

	return Company;
};
