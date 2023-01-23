import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class type_docs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор типа документа",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Наименование типа документа"
    }
  }, {
    sequelize,
    tableName: 'type_docs',
    schema: 'guide',
    timestamps: false,
    indexes: [
      {
        name: "type_docs_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
