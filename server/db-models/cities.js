const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cities.init(sequelize, DataTypes);
}

class cities extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('cities', {
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
