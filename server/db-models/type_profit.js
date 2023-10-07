const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return type_profit.init(sequelize, DataTypes);
}

class type_profit extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('type_profit', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификартор типа профита",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Наименование типа профита"
    }
  }, {
    tableName: 'type_profit',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "type_profit_in_idx",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "type_profit_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
