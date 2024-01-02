const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return offers.init(sequelize, DataTypes);
}

class offers extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('offers', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Наименование оффера"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "Статус"
    },
    id_cpa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Партнерская программа",
      references: {
        model: 'cpa',
        key: 'id'
      }
    },
    id_organization: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Идентификаотор организации",
      references: {
        model: 'organizations',
        key: 'id'
      }
    },
    information: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Данные оффера"
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Изображения оффера"
    }
  }, {
    tableName: 'offers',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "offers_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
