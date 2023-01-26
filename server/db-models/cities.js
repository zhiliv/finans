import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cities extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'regions',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    im: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rod: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tvor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    predl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cities',
    schema: 'country',
    timestamps: false,
    indexes: [
      {
        name: "cities_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
