import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class type_profit extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификартор типа профита",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Наименование типа профита"
    }
  }, {
    sequelize,
    tableName: 'type_profit',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "type_profit_in_idx",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "type_profit_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
