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
    },
    age_start: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Минимальный возраст"
    },
    age_end: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Максимальный возраст"
    },
    percent_min: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: "Минимальная процентная ставка"
    },
    type_percent_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип минимальной процентной ставки",
      references: {
        model: 'types_period',
        key: 'id'
      }
    },
    percent_max: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: "Максимальная процентная ставка"
    },
    type_percent_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип максимальной процентной ставки",
      references: {
        model: 'types_period',
        key: 'id'
      }
    },
    profit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Профит"
    },
    description_profit: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Описание профита"
    },
    url_offer: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Ссылка на оффер"
    },
    cr: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: "Количество уникальных конверсий \/ Количество уникальных кликов на баннеры"
    },
    ar: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: "Процент одобрения"
    },
    epc: {
      type: DataTypes.REAL,
      allowNull: true,
      comment: "Средний заработок в пересчете на один уникальный клик"
    },
    type_profit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип профита",
      references: {
        model: 'type_profit',
        key: 'id'
      }
    },
    img_offer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Банер оффера",
      references: {
        model: 'img_offers',
        key: 'id'
      }
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
