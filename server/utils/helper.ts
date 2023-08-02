import { sequelize } from '~/server/db.js'
import { Response } from '~/types/query'
import { Op, DataTypes } from 'sequelize'

type SelectParams = {
  offset: number
  limit: number
  where?: any
  order?: string
  desc?: boolean
}

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
 * @param {Object} params - Параметры запроса
 * @param {Obecjt} where - Условия запроса
 */
export const getList = async (tableName: string, params: any, where?: any) => {
  console.log('🚀 -> getList -> params:', params)
  try {
    const response: Response = await sequelize.models[tableName].findAll({
      order: params.order ? JSON.parse(params.order) : [],
      offset: params.offset || null,
      limit: params.limit || null,
      where: params.where ? params.where : null, 
    }) // Отправка запроса
    return response
  } catch (error: any) {
    console.log('🚀 -> getList -> error:', error)
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

/*
 * Формирование объекта условий выбора из БД
 * @function getWhere
 * @params {String} nameModel - Наименование модели
 * @params {String} whereText - Текстовое условие
 */
export const getWhere = (nameModel: string, whereText: string) => {
  let fields = sequelize.models[nameModel].tableAttributes // Получение полей таблицы

  /**
   * Получение значения строки
   * @function getValue
   * @param {String} key - Наименование поля
   * @param {Any} value - Значение поля
   */
  const getValue = (key: any, value: any) => {
    let result // Результат
    let typeData = 'STRING' // Тип данных
    if (fields[key].type.toString() === 'INTEGER') typeData = 'INTEGER'
    if (typeData === 'INTEGER') result = value
    if (typeData === 'STRING') result = `%${value}%`
    return { data: result, typeData }
  }

  let whereObj = JSON.parse(whereText) // Объект параметров
  const where:any = {} // Результат сформированного условия
  for (let key in whereObj) {
    const row = getValue(key, whereObj[key]) // Получение значения и типа данных
    if (row.typeData === 'INTEGER')
      where[key] = { 
        [Op.eq]: row.data,
      }
    else
      where[key] = {
        [Op.iLike]: row.data,
      }
  }
  return where
}

/* 
* Получение общего количества записей в таблице
* @function getCountTable
* @param {String} tableName - Наименование таблицы
* @params {Object} where - Условия отбора
*/
export const getCountTable = async (tableName:string, where:any) => {
  return await sequelize.models[tableName].count(where)
}
