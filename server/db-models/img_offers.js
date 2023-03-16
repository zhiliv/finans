import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class img_offers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор банера",
      primaryKey: true
    },
    id_offer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор оффера",
      references: {
        model: 'offers',
        key: 'id'
      }
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Путь к изображению"
    }
  }, {
    sequelize,
    tableName: 'img_offers',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "baners_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
