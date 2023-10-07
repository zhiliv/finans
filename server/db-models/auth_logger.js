const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return auth_logger.init(sequelize, DataTypes);
}

class auth_logger extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('auth_logger', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Уникальный идентификатор",
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор пользователя",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    date_requiest: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Дата запроса"
    },
    date_auth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Дата авторизации"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Статус авторизации"
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Токен авторизации"
    }
  }, {
    tableName: 'auth_logger',
    schema: 'controls',
    timestamps: false,
    indexes: [
      {
        name: "auth_logger_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
