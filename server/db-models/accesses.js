import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class accesses extends Model {
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
      comment: "Наименование страниицы"
    },
    createrd_date: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Дата создания записи"
    },
    update_date: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Дата обновления записи"
    },
    created_user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Идентификатор пользователя, создавшего запись"
    }
  }, {
    sequelize,
    tableName: 'accesses',
    schema: 'controls',
    timestamps: false,
    indexes: [
      {
        name: "accesses_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
