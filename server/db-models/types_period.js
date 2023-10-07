const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return types_period.init(sequelize, DataTypes);
}

class types_period extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('types_period', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор типа периода",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Наименование типа периода"
    },
    padez: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Родительский падеж"
    },
    mnozh: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Множественное число"
    }
  }, {
    tableName: 'types_period',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "type_interval_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
