import { sequelize } from '~/server/db'
import { defineAuthenticatedEventHandler } from '~/server/utils/defineAuthenticatedEventHandler';

export default defineEventHandler(async event => {
  try {
    const query: string = `
    SELECT
      org.id, -- Идентификатор
      org.name, -- Наименование
      to_jsonb(data),
      array_to_json(images)
    FROM prod.organizations AS org
    ORDER BY name
    `
    return await sequelize.query(query)
  } catch (error: any) {
    let message: string = '' // текст сообщения
    message = error && error.errors && error.errors.length ? error.errors.map((el: any) => el.message).join('\n') : '' // получение текста ошибки
    if (error.original && error.original.hint) message = error.original.message + '; ' + error.original.hint 
    throw createError({
      statusCode: 400, // установка статуса ответа
      message, // установка текста сообщения
    })
  }
})
