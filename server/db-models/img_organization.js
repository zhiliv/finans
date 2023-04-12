import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class img_organization extends Model {
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
      comment: "Идентификактор организации",
      references: {
        model: 'organizations',
        key: 'id'
      }
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Путь к файлу"
    }
  }, {
    sequelize,
    tableName: 'img_organization',
    schema: 'prod',
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
