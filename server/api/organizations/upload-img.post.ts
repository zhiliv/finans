import { saveImage } from '~/server/utils/helper.js'
import { sequelize } from '~/server/db'

export default defineEventHandler(async (event) => {
  const { fileName, file, id } = await readBody(event)

  await saveImage(fileName, file, id)
  return  { message: 'Изображение загружено и добавлено в базу данных', statusCode: 200 }
})