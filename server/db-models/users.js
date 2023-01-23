import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор пользователя",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Имя пользователя"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Пароль пользователя"
    },
    create_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Дата создания"
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Дата обновления записи"
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'controls',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "users_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
