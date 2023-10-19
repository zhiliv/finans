const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return sites.init(sequelize, DataTypes);
}

class sites extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('sites', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'sites',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "sites_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
