import { sequelize } from '~/server/db'
import { getWhereSql } from './../../utils/helper'

export default defineEventHandler(async event => {
  const params: any = getQuery(event)
  const order = JSON.parse(params.order)
  
  try {
    const query: string = `
    SELECT
      org.id, -- Идентификатор
      org.name as name, -- Наименование
      information -> 'short_description' as o_information_short_description,
      information -> 'site' as o_information_site,
      to_jsonb(images) as images
    FROM prod.organizations AS org
    ${params.where ? getWhereSql(JSON.parse(params.where)) : ' '}
    ORDER BY ${order[0][0]} ${order[0][1]}
    LIMIT ${params.limit} OFFSET ${params.offset}`
    const result = await sequelize.query(query)
    
    return  result[0] 
    
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


