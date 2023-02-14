import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class types_period extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    mnosh: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Множественное число "
    }
  }, {
    sequelize,
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
