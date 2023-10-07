const DataTypes = require("sequelize").DataTypes;
const _accesses = require("./accesses");
const _auth_logger = require("./auth_logger");
const _categories = require("./categories");
const _cities = require("./cities");
const _cpa = require("./cpa");
const _img_offers = require("./img_offers");
const _img_organization = require("./img_organization");
const _link_categories = require("./link_categories");
const _link_get_money = require("./link_get_money");
const _link_type_docs = require("./link_type_docs");
const _method_get_money = require("./method_get_money");
const _offers = require("./offers");
const _offers_old = require("./offers_old");
const _organizations = require("./organizations");
const _regions = require("./regions");
const _roles = require("./roles");
const _roles_accesses = require("./roles_accesses");
const _type_access = require("./type_access");
const _type_docs = require("./type_docs");
const _type_profit = require("./type_profit");
const _types_period = require("./types_period");
const _user_roles = require("./user_roles");
const _users = require("./users");

function initModels(sequelize) {
  const accesses = _accesses(sequelize, DataTypes);
  const auth_logger = _auth_logger(sequelize, DataTypes);
  const categories = _categories(sequelize, DataTypes);
  const cities = _cities(sequelize, DataTypes);
  const cpa = _cpa(sequelize, DataTypes);
  const img_offers = _img_offers(sequelize, DataTypes);
  const img_organization = _img_organization(sequelize, DataTypes);
  const link_categories = _link_categories(sequelize, DataTypes);
  const link_get_money = _link_get_money(sequelize, DataTypes);
  const link_type_docs = _link_type_docs(sequelize, DataTypes);
  const method_get_money = _method_get_money(sequelize, DataTypes);
  const offers = _offers(sequelize, DataTypes);
  const offers_old = _offers_old(sequelize, DataTypes);
  const organizations = _organizations(sequelize, DataTypes);
  const regions = _regions(sequelize, DataTypes);
  const roles = _roles(sequelize, DataTypes);
  const roles_accesses = _roles_accesses(sequelize, DataTypes);
  const type_access = _type_access(sequelize, DataTypes);
  const type_docs = _type_docs(sequelize, DataTypes);
  const type_profit = _type_profit(sequelize, DataTypes);
  const types_period = _types_period(sequelize, DataTypes);
  const user_roles = _user_roles(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  roles_accesses.belongsTo(accesses, { as: "access", foreignKey: "access_id"});
  accesses.hasMany(roles_accesses, { as: "roles_accesses", foreignKey: "access_id"});
  roles_accesses.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(roles_accesses, { as: "roles_accesses", foreignKey: "role_id"});
  user_roles.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(user_roles, { as: "user_roles", foreignKey: "role_id"});
  roles_accesses.belongsTo(type_access, { as: "type_access", foreignKey: "type_access_id"});
  type_access.hasMany(roles_accesses, { as: "roles_accesses", foreignKey: "type_access_id"});
  auth_logger.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(auth_logger, { as: "auth_loggers", foreignKey: "user_id"});
  roles.belongsTo(users, { as: "created_user", foreignKey: "created_user_id"});
  users.hasMany(roles, { as: "roles", foreignKey: "created_user_id"});
  user_roles.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_roles, { as: "user_roles", foreignKey: "user_id"});
  cities.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(cities, { as: "cities", foreignKey: "region_id"});
  link_categories.belongsTo(categories, { as: "id_category_category", foreignKey: "id_category"});
  categories.hasMany(link_categories, { as: "link_categories", foreignKey: "id_category"});
  offers.belongsTo(cpa, { as: "id_cpa_cpa", foreignKey: "id_cpa"});
  cpa.hasMany(offers, { as: "offers", foreignKey: "id_cpa"});
  organizations.belongsTo(img_organization, { as: "img_organization_img_organization", foreignKey: "img_organization_id"});
  img_organization.hasMany(organizations, { as: "organizations", foreignKey: "img_organization_id"});
  link_get_money.belongsTo(method_get_money, { as: "id_method_get_money_method_get_money", foreignKey: "id_method_get_money"});
  method_get_money.hasMany(link_get_money, { as: "link_get_moneys", foreignKey: "id_method_get_money"});
  img_offers.belongsTo(offers, { as: "id_offer_offer", foreignKey: "id_offer"});
  offers.hasMany(img_offers, { as: "img_offers", foreignKey: "id_offer"});
  link_categories.belongsTo(offers, { as: "id_offer_offer", foreignKey: "id_offer"});
  offers.hasMany(link_categories, { as: "link_categories", foreignKey: "id_offer"});
  link_get_money.belongsTo(offers, { as: "id_offer_offer", foreignKey: "id_offer"});
  offers.hasMany(link_get_money, { as: "link_get_moneys", foreignKey: "id_offer"});
  link_type_docs.belongsTo(offers, { as: "id_offer_offer", foreignKey: "id_offer"});
  offers.hasMany(link_type_docs, { as: "link_type_docs", foreignKey: "id_offer"});
  img_organization.belongsTo(organizations, { as: "id_organization_organization", foreignKey: "id_organization"});
  organizations.hasMany(img_organization, { as: "img_organizations", foreignKey: "id_organization"});
  offers.belongsTo(organizations, { as: "id_organization_organization", foreignKey: "id_organization"});
  organizations.hasMany(offers, { as: "offers", foreignKey: "id_organization"});
  link_type_docs.belongsTo(type_docs, { as: "id_type_doc_type_doc", foreignKey: "id_type_doc"});
  type_docs.hasMany(link_type_docs, { as: "link_type_docs", foreignKey: "id_type_doc"});
  offers.belongsTo(types_period, { as: "type_free_period_types_period", foreignKey: "type_free_period"});
  types_period.hasMany(offers, { as: "offers", foreignKey: "type_free_period"});
  offers.belongsTo(types_period, { as: "type_period_max_types_period", foreignKey: "type_period_max"});
  types_period.hasMany(offers, { as: "type_period_max_offers", foreignKey: "type_period_max"});
  offers.belongsTo(types_period, { as: "type_period_min_types_period", foreignKey: "type_period_min"});
  types_period.hasMany(offers, { as: "type_period_min_offers", foreignKey: "type_period_min"});
  offers.belongsTo(types_period, { as: "type_review_time_types_period", foreignKey: "type_review_time"});
  types_period.hasMany(offers, { as: "type_review_time_offers", foreignKey: "type_review_time"});

  return {
    accesses,
    auth_logger,
    categories,
    cities,
    cpa,
    img_offers,
    img_organization,
    link_categories,
    link_get_money,
    link_type_docs,
    method_get_money,
    offers,
    offers_old,
    organizations,
    regions,
    roles,
    roles_accesses,
    type_access,
    type_docs,
    type_profit,
    types_period,
    user_roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
