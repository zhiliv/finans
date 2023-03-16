import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class offers extends Model {
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
      comment: "Наименование оффера"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Описание оффера"
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Короткое описание оффера"
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Ссылка на сайт"
    },
    create_dt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Дата создания"
    }
  }, {
    sequelize,
    tableName: 'offers',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "offers_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
