import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const id = await readBody(event) // параметры запроса
  const result = {} // переменная для получения  результата
  try {
    const optionsWhere = {
      where: {
        id,
      },
    }
    const count = await sequelize.models.type_profit.count(optionsWhere) // получение количества записей с таким наименованием
    if (count === 0) {
      result.status = 202 // установка статуса ответа
      result.typeMessage = 'warning' // установка типа ответа
      result.message = 'Такой записи не существует!' // установка текста ответа
    } else {
      result.status = 200 // установка статуса
      result.message = 'Запись удалена успешно' // установка текста ответа
      result.typeMessage = 'success' // установка типа
      result.data = await sequelize.models.type_profit.destroy(optionsWhere) /// добавление данных
    }
    return result
  } catch (error) {
    let message = error.errors ? error.errors.map(el => el.message).join('\n') : ''
    if (error.original && error.original.hint) message += error.original.message + '; ' + error.original.hint
    throw createError({
      statusCode: 400,
      message,
    })
  }
})
