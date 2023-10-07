const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return user_roles.init(sequelize, DataTypes);
}

class user_roles extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('user_roles', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор",
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
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификактор роли",
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    tableName: 'user_roles',
    schema: 'controls',
    timestamps: false,
    indexes: [
      {
        name: "user_roles_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
