const DataTypes = require("sequelize").DataTypes;
const _accesses = require("./accesses");
const _auth_logger = require("./auth_logger");
const _categories = require("./categories");
const _cities = require("./cities");
const _cpa = require("./cpa");
const _method_get_money = require("./method_get_money");
const _offices = require("./offices");
const _organizations = require("./organizations");
const _products = require("./products");
const _regions = require("./regions");
const _roles = require("./roles");
const _roles_accesses = require("./roles_accesses");
const _sites = require("./sites");
const _type_access = require("./type_access");
const _type_docs = require("./type_docs");
const _type_product = require("./type_product");
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
  const method_get_money = _method_get_money(sequelize, DataTypes);
  const offices = _offices(sequelize, DataTypes);
  const organizations = _organizations(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const regions = _regions(sequelize, DataTypes);
  const roles = _roles(sequelize, DataTypes);
  const roles_accesses = _roles_accesses(sequelize, DataTypes);
  const sites = _sites(sequelize, DataTypes);
  const type_access = _type_access(sequelize, DataTypes);
  const type_docs = _type_docs(sequelize, DataTypes);
  const type_product = _type_product(sequelize, DataTypes);
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
  products.belongsTo(cpa, { as: "id_cpa_cpa", foreignKey: "id_cpa"});
  cpa.hasMany(products, { as: "products", foreignKey: "id_cpa"});
  products.belongsTo(organizations, { as: "id_organization_organization", foreignKey: "id_organization"});
  organizations.hasMany(products, { as: "products", foreignKey: "id_organization"});
  products.belongsTo(types_period, { as: "type_free_period_types_period", foreignKey: "type_free_period"});
  types_period.hasMany(products, { as: "products", foreignKey: "type_free_period"});
  products.belongsTo(types_period, { as: "type_period_max_types_period", foreignKey: "type_period_max"});
  types_period.hasMany(products, { as: "type_period_max_products", foreignKey: "type_period_max"});
  products.belongsTo(types_period, { as: "type_period_min_types_period", foreignKey: "type_period_min"});
  types_period.hasMany(products, { as: "type_period_min_products", foreignKey: "type_period_min"});
  products.belongsTo(types_period, { as: "type_review_time_types_period", foreignKey: "type_review_time"});
  types_period.hasMany(products, { as: "type_review_time_products", foreignKey: "type_review_time"});

  return {
    accesses,
    auth_logger,
    categories,
    cities,
    cpa,
    method_get_money,
    offices,
    organizations,
    products,
    regions,
    roles,
    roles_accesses,
    sites,
    type_access,
    type_docs,
    type_product,
    type_profit,
    types_period,
    user_roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
