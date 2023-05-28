import { sequelize } from '~/server/db.js'
import { H3Event } from 'h3'
import { Response } from '~/types/query'
import { getErrorResponse } from '~/server/utils/helper.js'

export default defineEventHandler(async (event: H3Event) => {
  const params = await readBody(event) // получение параметров
  const response: Response = {} // переменная для хранения результата
  try {
    const optionWhere = {
      where: {
        id: params.id,
      },
    } // параметры условий обновления
    delete params.id // удаление свойства id
    delete params.isActive // удаление свойства isActive
    response.status = 200
    response.typeMessage = 'success'
    response.message = 'Запись обновлена успешно'
    response.data = await sequelize.models.cpa.update(params, optionWhere) // выполнение обновления записи
    return response
  } catch (error: any) {
    const err = getErrorResponse(error) // Формирование ошибки
    throw createError(err)
  }
})
