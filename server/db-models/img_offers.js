const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return img_offers.init(sequelize, DataTypes);
}

class img_offers extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('img_offers', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор банера",
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
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Путь к изображению"
    }
  }, {
    tableName: 'img_offers',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "baners_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
