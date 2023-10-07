const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return roles.init(sequelize, DataTypes);
}

class roles extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('roles', {
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
      comment: "Наименование роли"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Дата создания записи"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Дата обновлбения роли"
    },
    created_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Создавший пользователь",
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'roles',
    schema: 'controls',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "roles_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
