const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return users.init(sequelize, DataTypes);
}

class users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('users', {
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
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Пароль пользователя"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Дата создания"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Дата обновления записи"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Почта пользователя"
    }
  }, {
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
