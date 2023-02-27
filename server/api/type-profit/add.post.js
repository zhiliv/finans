import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const params = await readBody(event) // параметры запроса
  const result = {} // результативный ответ
  try {
    const optionsWhere = {
      where: {
        name: params.name,
      },
    }
    const count = await sequelize.models.type_profit.count(optionsWhere) // получение количества записей с таким наименованием
    if (count > 0) {
      result.status = 217 // установка статуса ответа
      result.typeMessage = 'warning' // тип сообщения
      result.message = 'Запись с таким наименование уже существуют' // установка текста сообщения
    } else {
      result.status = 200 // установка статуса ответа
      result.message = 'Запись создана успешно' // установка сообщения ответа
      result.typeMessage = 'success' // тип сообщения
      result.data = await sequelize.models.type_profit.create(params) // возврат результата добавления
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
