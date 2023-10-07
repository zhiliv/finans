const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return type_docs.init(sequelize, DataTypes);
}

class type_docs extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('type_docs', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор типа документа",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Наименование типа документа"
    }
  }, {
    tableName: 'type_docs',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "type_docs_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
