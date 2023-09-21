import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class link_type_docs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_offer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'offers',
        key: 'id'
      }
    },
    id_type_doc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type_docs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'link_type_docs',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "link_type_docs_id_idx",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "link_typedocs_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
