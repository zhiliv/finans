import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class method_get_money extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор способа получения денег",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Наименование способо получения денег"
    }
  }, {
    sequelize,
    tableName: 'method_get_money',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "method_get_money_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
