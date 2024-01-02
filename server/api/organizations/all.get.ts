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
      CASE WHEN
        to_jsonb(images) @> '[{"isActive": true}]'
      THEN '<div style="width: 100%; display: flex; justify-content: center">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36" color="green"><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
      </div>'
      ELSE '<div style="width: 100%; display: flex; justify-content: center">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" color="red"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"/></svg>
      </div>'
      END AS is_main_img
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


