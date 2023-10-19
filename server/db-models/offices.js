const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return offices.init(sequelize, DataTypes);
}

class offices extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('offices', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор",
      primaryKey: true
    },
    adress_text: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Адрес офиса в виде текста"
    },
    geo: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ГЕО позиция офиса"
    },
    is_main: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Главный офис"
    }
  }, {
    tableName: 'offices',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "offices_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
