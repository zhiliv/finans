import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class type_access extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    sequelize,
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
