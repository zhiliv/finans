import { H3Event } from 'h3'
import { sequelize } from '~/server/db'

/* Получение данных записи по ее идентификатору */
export default defineEventHandler(async (event: H3Event) => {
  const params: any = getQuery(event)

  const sql = `
  SELECT
    org.id, -- Идентификатор
    org.name, -- Наименование
    CASE WHEN information IS NOT  NULL
      THEN 
        to_jsonb(information)
      ELSE
        NULL
      END AS information,
    CASE WHEN images IS NOT NULL
      THEN 
        -- array_to_json(array[to_json(images)])
        images
      ELSE  
        NULL
      END AS Images
  FROM 
    prod.organizations AS org
  WHERE org.id=${params.id}
  ORDER BY name 
`

  const result = await sequelize.query(sql)
  return result.length ? result[0][0] : null
})
