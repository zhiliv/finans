import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class categories extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    sequelize,
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
