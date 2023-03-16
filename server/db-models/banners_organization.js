import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class banners_organization extends Model {
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
    id_organization: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификактор организации"
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Путь к файлу"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Дата создания записи"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "Дата обнолвения "
    }
  }, {
    sequelize,
    tableName: 'banners_organization',
    schema: 'prod',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "banners_organization_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
