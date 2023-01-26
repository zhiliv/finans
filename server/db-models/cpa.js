import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cpa extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    }
  }, {
    sequelize,
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
