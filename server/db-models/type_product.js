const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return type_product.init(sequelize, DataTypes);
}

class type_product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('type_product', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'type_product',
    schema: 'guide',
    timestamps: false
  });
  }
}
