const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return link_categories.init(sequelize, DataTypes);
}

class link_categories extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('link_categories', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор записи",
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
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор категории",
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    tableName: 'link_categories',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "link_categories_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "link_categories_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
