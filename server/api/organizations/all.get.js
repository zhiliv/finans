import { sequelize } from '~/server/db.js'
import * as fs from 'fs'

// import { getServerSession } from '#auth'
export default defineEventHandler(async event => {

  try {
    return await sequelize.models.organizations.findAll({ order: ['name'] })
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
