const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products.init(sequelize, DataTypes);
}

class products extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('products', {
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
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "Статус"
    },
    id_cpa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Партнерская программа",
      references: {
        model: 'cpa',
        key: 'id'
      }
    },
    id_organization: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Идентификаотор организации",
      references: {
        model: 'organizations',
        key: 'id'
      }
    },
    sum_start: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Минимальная сумма"
    },
    sum_end: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Максимальная сумма"
    },
    free_period: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Беспроцентный период"
    },
    type_free_period: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип беспроцентного периода",
      references: {
        model: 'types_period',
        key: 'id'
      }
    },
    period_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Минимальный период"
    },
    type_period_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип минимального периода",
      references: {
        model: 'types_period',
        key: 'id'
      }
    },
    period_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Максимальный период"
    },
    type_period_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип максимального периода",
      references: {
        model: 'types_period',
        key: 'id'
      }
    },
    review_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Время рассмотрения заявки"
    },
    type_review_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип времени рассотрения",
      references: {
        model: 'types_period',
        key: 'id'
      }
    }
  }, {
    tableName: 'products',
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
