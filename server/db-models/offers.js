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
    id_cpa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Идентификатор партнерской программы",
      references: {
        model: 'cpa',
        key: 'id'
      }
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
      comment: "Минимальный срок"
    },
    type_period_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип минимального срока",
      references: {
        model: 'types_period',
        key: 'id'
      }
    },
    period_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Максимальный срок"
    },
    type_period_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип максимального срока",
      references: {
        model: 'types_period',
        key: 'id'
      }
    },
    review_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Время рассмотрения"
    },
    type_review_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип времени рассмотрения",
      references: {
        model: 'types_period',
        key: 'id'
      }
    },
    age_start: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Минимальный возраст"
    },
    age_end: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Размер вознаграждения"
    },
    description_profit: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Описание для получения вознаграждения"
    },
    url_offer: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Ссылка на оффер"
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Ссылка на сайт"
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
    create_dt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "Дата создания"
    },
    user_create: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Пользователь создавший запись",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_update: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Пользователь обновивший запись",
      references: {
        model: 'users',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "Состояние оффера"
    },
    type_profit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Тип профита"
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
