import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class link_categories extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор записи",
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
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор категории",
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'link_categories',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "link_categories_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "link_categories_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
