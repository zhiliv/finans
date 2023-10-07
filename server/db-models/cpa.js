const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cpa.init(sequelize, DataTypes);
}

class cpa extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('cpa', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор партнерской программы",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Наименование партнерской программы"
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Адрес сайта"
    }
  }, {
    tableName: 'cpa',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "cpa_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
