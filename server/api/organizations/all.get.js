import { sequelize } from '~/server/db.js'

// import { getServerSession } from '#auth'
export default defineEventHandler(async event => {
  try {
    const query = `
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
