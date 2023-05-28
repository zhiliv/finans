import { sequelize } from '~/server/db.js'
import { Response } from '~/types/query'
import { H3Event } from 'h3'
import { getErrorResponse } from '~/server/utils/helper.js'

export default defineEventHandler(async (event: H3Event) => {
  const id = await readBody(event) // параметры запроса
  const response: Response = {} // переменная для получения  результата
  try {
    const optionsWhere = {
      where: {
        id,
      },
    }
    const count = await sequelize.models.cpa.count(optionsWhere) // получение количества записей с таким наименованием
    if (count === 0) {
      response.status = 202 // установка статуса ответа
      response.typeMessage = 'warning' // установка типа ответа
      response.message = 'Такой записи не существует!' // установка текста ответа
    } else {
      response.status = 200 // установка статуса
      response.message = 'Запись удалена успешно' // установка текста ответа
      response.typeMessage = 'success' // установка типа
      response.data = await sequelize.models.cpa.destroy(optionsWhere) /// добавление данных
    }
    return response
  } catch (error: any) {
    const err = getErrorResponse(error) // Формирование ошибки
    throw createError(err)
  }
})
