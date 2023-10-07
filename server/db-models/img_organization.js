const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return img_organization.init(sequelize, DataTypes);
}

class img_organization extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('img_organization', {
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
    },
    label: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Описание изображения"
    }
  }, {
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
