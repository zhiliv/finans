import { sequelize } from '~/server/db.js'
export default defineEventHandler(async event => {
  const result = await sequelize.models.categories.findAll({ order: ['name'] }) // получение всех записей из таблицы 'type_docs
  return result
})
