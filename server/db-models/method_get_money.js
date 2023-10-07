const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return method_get_money.init(sequelize, DataTypes);
}

class method_get_money extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('method_get_money', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор способа получения денег",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Наименование способо получения денег"
    }
  }, {
    tableName: 'method_get_money',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "method_get_money_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
