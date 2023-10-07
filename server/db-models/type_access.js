const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return type_access.init(sequelize, DataTypes);
}

class type_access extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('type_access', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор ",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Наименование типа доступа"
    }
  }, {
    tableName: 'type_access',
    schema: 'controls',
    timestamps: false,
    indexes: [
      {
        name: "type_access_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
