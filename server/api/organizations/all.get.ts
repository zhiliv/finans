import { sequelize } from '~/server/db'
import { defineAuthenticatedEventHandler } from '~/server/utils/defineAuthenticatedEventHandler';

export default defineEventHandler(async event => {
  try {
    const query: string = `
    SELECT
      org.id, -- Идентификатор
      org.name, -- Наименование
      short_description, -- Короткое описание
      org.description, -- Полное описание
      org.site, -- Сайт организации
      img.path AS image, -- Основание изображение организации
      (SELECT
          array_agg(path)
        FROM
          prod.img_organization AS img
        WHERE img.id_organization = org.id) AS images
    FROM prod.organizations AS org
    LEFT JOIN prod.img_organization AS img ON img.id = org.img_organization_id
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
