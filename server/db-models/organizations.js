import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class organizations extends Model {
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
      comment: "Наименование"
    },
    short_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Короткое описание "
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Полное описание"
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Сайт организации"
    },
    img_organization_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Банер по умолчанию",
      references: {
        model: 'img_organization',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'organizations',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "organuzation_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "organuzation_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
