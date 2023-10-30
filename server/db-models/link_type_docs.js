const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return link_type_docs.init(sequelize, DataTypes);
}

class link_type_docs extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('link_type_docs', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_offer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'offers',
        key: 'id'
      }
    },
    id_type_doc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type_docs',
        key: 'id'
      }
    }
  }, {
    tableName: 'link_type_docs',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "link_type_docs_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "link_typedocs_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
