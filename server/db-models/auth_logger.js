import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class auth_logger extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Уникакльный идентификатор",
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Идентификатор пользователя"
    },
    date_requiest: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Дата запроса"
    },
    date_auth: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Дата авторизации"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Статус авторизации"
    },
    ip_adress: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Ip дрес"
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Токен авторизации"
    }
  }, {
    sequelize,
    tableName: 'auth_logger',
    schema: 'controls',
    timestamps: false,
    indexes: [
      {
        name: "auth_loggoer_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
