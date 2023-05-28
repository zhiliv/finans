import { sequelize } from '~/server/db.js'
import { Response } from '~/types/query'

/*
 * Формирование ошибки при выполнении запроса
 * @function getErrorResponse
 */
export const getErrorResponse = (error: any) => {
  /**
   * @interface ErrorRes
   * @member {String} message - Текст ошибкой
   * @member {Number} statusCode - Код ответа
   */
  interface ErrorRes {
    message: string
    statusCode: number
  }
  let errorRes = { message: '', statusCode: 400 }
  errorRes.message =
    error && error.errors && error.errors.length ? error.errors.map((el: any) => el.message).join('\n') : ''
  if (error.original && error.original.hint) errorRes.message = error.original.message + '; ' + error.original.hint
  return errorRes
}

/*
 * Получение всего списка
 * @function getList
 * @param {String} tableName - Наименование таблицы в модели
 */
export const getList = async (tableName: string) => {
  try {
    const response: Response = await sequelize.models[tableName].findAll({ order: ['name'] })
    return response
  } catch (error: any) {
    const err = getErrorResponse(error) // формирование ошибки
    throw createError(err)
  }
}

/*
 * Обновление записи
 * @function updateItem
 */
export const updateItem = async (tableName: string, params: any) => {
  try {
    const response: Response = {} // переменная для хранения результата
    const optionWhere = {
      where: {
        id: params.id,
      },
    } // параметры условий обновления
    delete params.id // удаление свойства id
    response.status = 200 // Установка статуса
    response.typeMessage = 'success' // Установка типа сообщения
    response.message = 'Запись обновлена успешно' // Установка текста сообщения
    response.data = await sequelize.models[tableName].update(params, optionWhere) // выполнение обновления записи
    return response
  } catch (error: any) {
    const err = getErrorResponse(error) // формирование ошибки
    throw createError(err)
  }
}
