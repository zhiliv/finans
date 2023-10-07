const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return categories.init(sequelize, DataTypes);
}

class categories extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('categories', {
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
      comment: "Наименование категории оффера"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Описание категории"
    }
  }, {
    tableName: 'categories',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "categories_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
