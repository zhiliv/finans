import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class roles_accesses extends Model {
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
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор роли",
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    access_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Иднетификатор доступа",
      references: {
        model: 'accesses',
        key: 'id'
      }
    },
    type_access_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор типа достпупа",
      references: {
        model: 'type_access',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Статус активности доступа"
    }
  }, {
    sequelize,
    tableName: 'roles_accesses',
    schema: 'controls',
    timestamps: false,
    indexes: [
      {
        name: "roles_accesses_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
