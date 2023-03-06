import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _baners from  "./baners.js";
import _categories from  "./categories.js";
import _cities from  "./cities.js";
import _cpa from  "./cpa.js";
import _link_categories from  "./link_categories.js";
import _link_get_money from  "./link_get_money.js";
import _method_get_money from  "./method_get_money.js";
import _offers from  "./offers.js";
import _regions from  "./regions.js";
import _type_docs from  "./type_docs.js";
import _type_profit from  "./type_profit.js";
import _types_period from  "./types_period.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const baners = _baners.init(sequelize, DataTypes);
  const categories = _categories.init(sequelize, DataTypes);
  const cities = _cities.init(sequelize, DataTypes);
  const cpa = _cpa.init(sequelize, DataTypes);
  const link_categories = _link_categories.init(sequelize, DataTypes);
  const link_get_money = _link_get_money.init(sequelize, DataTypes);
  const method_get_money = _method_get_money.init(sequelize, DataTypes);
  const offers = _offers.init(sequelize, DataTypes);
  const regions = _regions.init(sequelize, DataTypes);
  const type_docs = _type_docs.init(sequelize, DataTypes);
  const type_profit = _type_profit.init(sequelize, DataTypes);
  const types_period = _types_period.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  cities.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(cities, { as: "cities", foreignKey: "region_id"});
  link_categories.belongsTo(categories, { as: "id_category_category", foreignKey: "id_category"});
  categories.hasMany(link_categories, { as: "link_categories", foreignKey: "id_category"});
  offers.belongsTo(cpa, { as: "id_cpa_cpa", foreignKey: "id_cpa"});
  cpa.hasMany(offers, { as: "offers", foreignKey: "id_cpa"});
  link_get_money.belongsTo(method_get_money, { as: "id_method_get_money_method_get_money", foreignKey: "id_method_get_money"});
  method_get_money.hasMany(link_get_money, { as: "link_get_moneys", foreignKey: "id_method_get_money"});
  baners.belongsTo(offers, { as: "id_offer_offer", foreignKey: "id_offer"});
  offers.hasMany(baners, { as: "baners", foreignKey: "id_offer"});
  link_categories.belongsTo(offers, { as: "id_offer_offer", foreignKey: "id_offer"});
  offers.hasMany(link_categories, { as: "link_categories", foreignKey: "id_offer"});
  link_get_money.belongsTo(offers, { as: "id_offer_offer", foreignKey: "id_offer"});
  offers.hasMany(link_get_money, { as: "link_get_moneys", foreignKey: "id_offer"});
  offers.belongsTo(types_period, { as: "type_free_period_types_period", foreignKey: "type_free_period"});
  types_period.hasMany(offers, { as: "offers", foreignKey: "type_free_period"});
  offers.belongsTo(types_period, { as: "type_percent_max_types_period", foreignKey: "type_percent_max"});
  types_period.hasMany(offers, { as: "type_percent_max_offers", foreignKey: "type_percent_max"});
  offers.belongsTo(types_period, { as: "type_percent_min_types_period", foreignKey: "type_percent_min"});
  types_period.hasMany(offers, { as: "type_percent_min_offers", foreignKey: "type_percent_min"});
  offers.belongsTo(types_period, { as: "type_period_max_types_period", foreignKey: "type_period_max"});
  types_period.hasMany(offers, { as: "type_period_max_offers", foreignKey: "type_period_max"});
  offers.belongsTo(types_period, { as: "type_period_min_types_period", foreignKey: "type_period_min"});
  types_period.hasMany(offers, { as: "type_period_min_offers", foreignKey: "type_period_min"});
  offers.belongsTo(types_period, { as: "type_review_time_types_period", foreignKey: "type_review_time"});
  types_period.hasMany(offers, { as: "type_review_time_offers", foreignKey: "type_review_time"});
  offers.belongsTo(users, { as: "user_create_user", foreignKey: "user_create"});
  users.hasMany(offers, { as: "offers", foreignKey: "user_create"});
  offers.belongsTo(users, { as: "user_update_user", foreignKey: "user_update"});
  users.hasMany(offers, { as: "user_update_offers", foreignKey: "user_update"});

  return {
    baners,
    categories,
    cities,
    cpa,
    link_categories,
    link_get_money,
    method_get_money,
    offers,
    regions,
    type_docs,
    type_profit,
    types_period,
    users,
  };
}
