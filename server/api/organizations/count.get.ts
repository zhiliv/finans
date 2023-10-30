import { sequelize } from '~/server/db'
import { getWhereSql } from './../../utils/helper'

export default defineEventHandler(async event => {
  const params: any = getQuery(event)

  try {
    const query: string = `
    SELECT
      COUNT(org.id)
    FROM prod.organizations AS org
    ${params.where ? getWhereSql(JSON.parse(params.where)) : ' '}
    LIMIT ${params.limit} OFFSET ${params.offset}`

    const result = await sequelize.query(query)
    return result[0]

  } catch(error: any) {
    let message: string = '' // текст сообщения
    message = error && error.errors && error.errors.length ? error.errors.map((el: any) => el.message).join('\n') : '' // получение текста ошибки
    if(error.original && error.original.hint) message = error.original.message + '; ' + error.original.hint
    throw createError({
      statusCode: 400, // установка статуса ответа
      message, // установка текста сообщения
    })
  }
})


