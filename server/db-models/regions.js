const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return regions.init(sequelize, DataTypes);
}

class regions extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('regions', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    declination: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'regions',
    schema: 'country',
    timestamps: false,
    indexes: [
      {
        name: "regions_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
