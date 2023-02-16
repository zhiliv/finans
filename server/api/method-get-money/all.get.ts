import { sequelize } from '~/server/db.js'
export default defineEventHandler(async event => {
  const result = await sequelize.models.method_get_money.findAll({ order: ['name'] }) // получение всех записей из таблицы 'type_docs
  return result
})
