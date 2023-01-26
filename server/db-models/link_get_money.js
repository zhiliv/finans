import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class link_get_money extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор  связи",
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
    id_method_get_money: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Идентификатор способа получения денег",
      references: {
        model: 'method_get_money',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'link_get_money',
    schema: 'prod',
    timestamps: false,
    indexes: [
      {
        name: "link_get_money_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
