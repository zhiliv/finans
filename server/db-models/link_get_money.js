const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return link_get_money.init(sequelize, DataTypes);
}

class link_get_money extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('link_get_money', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор  связи",
      primaryKey: true
    },
    id_offer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор оффера",
      references: {
        model: 'offers',
        key: 'id'
      }
    },
    id_method_get_money: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор способа получения денег",
      references: {
        model: 'method_get_money',
        key: 'id'
      }
    }
  }, {
    tableName: 'link_get_money',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "link_get_money_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
