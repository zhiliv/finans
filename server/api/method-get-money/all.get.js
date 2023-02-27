import { sequelize } from '~/server/db.js'
export default defineEventHandler(async event => {
  try {
    return await sequelize.models.method_get_money.findAll({ order: ['name'] })
  } catch (error) {
    let message = ''
    message = error && error.errors && error.errors.length ? error.errors.map(el => el.message).join('\n') : ''
    if (error.original && error.original.hint) message = error.original.message + '; ' + error.original.hint
    throw createError({
      statusCode: 400, // установка статуса ответа
      message, // установка текста сообщения
    })
  }
})
