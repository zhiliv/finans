import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _accesses from  "./accesses.js";
import _categories from  "./categories.js";
import _cities from  "./cities.js";
import _cpa from  "./cpa.js";
import _img_offers from  "./img_offers.js";
import _img_organization from  "./img_organization.js";
import _link_categories from  "./link_categories.js";
import _link_get_money from  "./link_get_money.js";
import _method_get_money from  "./method_get_money.js";
import _offers from  "./offers.js";
import _offers_old from  "./offers_old.js";
import _organizations from  "./organizations.js";
import _regions from  "./regions.js";
import _roles from  "./roles.js";
import _roles_accesses from  "./roles_accesses.js";
import _type_access from  "./type_access.js";
import _type_docs from  "./type_docs.js";
import _type_profit from  "./type_profit.js";
import _types_period from  "./types_period.js";
import _user_roles from  "./user_roles.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const accesses = _accesses.init(sequelize, DataTypes);
  const categories = _categories.init(sequelize, DataTypes);
  const cities = _cities.init(sequelize, DataTypes);
  const cpa = _cpa.init(sequelize, DataTypes);
  const img_offers = _img_offers.init(sequelize, DataTypes);
  const img_organization = _img_organization.init(sequelize, DataTypes);
  const link_categories = _link_categories.init(sequelize, DataTypes);
  const link_get_money = _link_get_money.init(sequelize, DataTypes);
  const method_get_money = _method_get_money.init(sequelize, DataTypes);
  const offers = _offers.init(sequelize, DataTypes);
  const offers_old = _offers_old.init(sequelize, DataTypes);
  const organizations = _organizations.init(sequelize, DataTypes);
  const regions = _regions.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const roles_accesses = _roles_accesses.init(sequelize, DataTypes);
  const type_access = _type_access.init(sequelize, DataTypes);
  const type_docs = _type_docs.init(sequelize, DataTypes);
  const type_profit = _type_profit.init(sequelize, DataTypes);
  const types_period = _types_period.init(sequelize, DataTypes);
  const user_roles = _user_roles.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  roles_accesses.belongsTo(accesses, { as: "access", foreignKey: "access_id"});
  accesses.hasMany(roles_accesses, { as: "roles_accesses", foreignKey: "access_id"});
  roles_accesses.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(roles_accesses, { as: "roles_accesses", foreignKey: "role_id"});
  user_roles.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(user_roles, { as: "user_roles", foreignKey: "role_id"});
  roles_accesses.belongsTo(type_access, { as: "type_access", foreignKey: "type_access_id"});
  type_access.hasMany(roles_accesses, { as: "roles_accesses", foreignKey: "type_access_id"});
  roles.belongsTo(users, { as: "created_user", foreignKey: "created_user_id"});
  users.hasMany(roles, { as: "roles", foreignKey: "created_user_id"});
  user_roles.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_roles, { as: "user_roles", foreignKey: "user_id"});
  cities.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(cities, { as: "cities", foreignKey: "region_id"});
  link_categories.belongsTo(categories, { as: "id_category_category", foreignKey: "id_category"});
  categories.hasMany(link_categories, { as: "link_categories", foreignKey: "id_category"});
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
  img_organization.belongsTo(organizations, { as: "id_organization_organization", foreignKey: "id_organization"});
  organizations.hasMany(img_organization, { as: "img_organizations", foreignKey: "id_organization"});

  return {
    accesses,
    categories,
    cities,
    cpa,
    img_offers,
    img_organization,
    link_categories,
    link_get_money,
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
