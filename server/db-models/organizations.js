const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizations.init(sequelize, DataTypes);
}

class organizations extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('organizations', {
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
      comment: "Наименование"
    },
    information: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Данные организации"
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Изображдения организации"
    }
  }, {
    tableName: 'organizations',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "organuzation_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "organuzation_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
