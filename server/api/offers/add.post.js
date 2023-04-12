import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const {models} = sequelize
  const params = await readBody(event) // параметры запроса
  const result = {} // результативный ответ
  try {
    const optionsWhere = {
      where: {
        name: params.name,
      },
    }
    const count = await models.offers.count(optionsWhere) // получение количества записей с таким наименованием
    if (count > 0) {
      result.status = 217 // установка статуса ответа
      result.typeMessage = 'warning' // тип сообщения
      result.message = 'Запись с таким наименование уже существуют' // установка текста сообщения
    } else {
      result.status = 200 // установка статуса ответа
      result.message = 'Запись создана успешно' // установка сообщения ответа
      result.typeMessage = 'success' // тип сообщения
      result.data = await models.offers.create(params) // возврат результата добавления
    }
    return result
  } catch (error) {
    let message = error.errors ? error.errors.map(el => el.message).join('\n') : ''
    throw createError({
      statusCode: 400, // установка статуса ответа
      message, // установка текста сообщения
    })
  }
})
