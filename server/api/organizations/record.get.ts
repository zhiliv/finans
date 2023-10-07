import { H3Event } from 'h3'
import { sequelize } from '~/server/db'

/* Получение данных записи по ее идентификатору */
export default defineEventHandler(async (event: H3Event) => {
  const params: any = getQuery(event)

  const sql = `
  SELECT
    org.id, -- Идентификатор
    org.name, -- Наименование
    short_description, -- Короткое описание
    org.description, -- Полное описание
    org.site, -- Сайт организации
    (SELECT 
      json_agg(img.*)      
    FROM 
      prod.img_organization AS img
    WHERE 
      img.id_organization=${params.id}
    ) as images
  FROM 
    prod.organizations AS org
  WHERE org.id=${params.id}
  GROUP BY org.id
  ORDER BY name 
`

  const result = await sequelize.query(sql)
  return result.length ? result[0][0] : null
})
