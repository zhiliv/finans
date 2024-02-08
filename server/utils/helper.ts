import { db } from '~/server/db'
import { Response } from '~/types/query'
import fs from 'fs'
import { SchemaDB } from '~/types/SchemaDB'

/** 
** Удаление свойства из объекта
* @function removeObjectProperty
* @param {Object} obj - Объект для удаления свойства
* @param {String} name - Имя свойства для удаления
*/
export const removeObjectProperty = (obj: object, name: string): object => {
  let newObj:any = { ...obj };
  delete newObj[name];
  return newObj;
}

/** 
** Получение колонок из схемы
* @function getColumnFromSchema
* @param {Object} obj- Схема для получения колонок
*/
export const getColumnFromSchema = (schema: SchemaDB): string[] | null => {
  if(!schema){
    return null
  } 
  const keys = Object.keys(schema.columns)
  const columns = keys.map((key: any) => `${schema.short}.${key} as ${schema.short}_${key}`)
  keys.forEach((col:any) => {
    if(schema.columns[col].type === 'JSONB'){
      schema.columns[col].columns.forEach((el:any) => {
        
      })
    }
  })
  
  return columns
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
  if(error.original && error.original.hint) errorRes.message = error.original.message + '; ' + error.original.hint
  return errorRes
}

/*
 * Получение всего списка
 * @function getList
 * @param {String} tableName - Наименование таблицы в модели
 * @param {Object} params - Параметры запроса
 * @param {Obecjt} where - Условия запроса
 */
export const getList = async (tableName: string, params: any) => {
  try {
    const response: Response = await sequelize.models[tableName].findAll({
      order: params.order ? JSON.parse(params.order) : [],
      offset: params.offset || null,
      limit: params.limit || null,
      where: params.where ? params.where : null,
    }) // Отправка запроса
    return response
  } catch(error: any) {
    const err = getErrorResponse(error) // формирование ошибки
    throw createError(err)
  }
}

/*
 * Получение данных записи по идентификатору
 * @function getRecord
 * @param {String} tableName - Наименование таблицы в модели
 * @param {Object} params - Параметры запроса
 * @param {Object} where - Условия запроса
 */
export const getRecord = async (tableName: string, params: any) => {
  try {
    const response: Response = await sequelize.models[tableName].findOne({
      where: params.where ? params.where : null,
    }) // Отправка запроса
    return response
  } catch(error: any) {
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
  } catch(error: any) {
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

  let whereObj = JSON.parse(whereText) // Объект параметров
  const where: any = {} // Результат сформированного условия
  for(let key in whereObj) {
    const row = whereObj[key]
    let obj
    /* {
      [Op[row.data.type]]: row.data.value,
    } */
    if(fields[key]?.type){
      const value = fields[key].type.toString() === 'INTEGER' ? +row.value : row.value
      if(row.type === 'gt') obj = { [Op.gt]: value }
      else if(row.type === 'lt') obj = { [Op.lt]: value }
      else if(row.type === 'iLike') obj = { [Op.iLike]: `%${value}` }
      else if(row.type === 'eq') obj = { [Op.eq]: value }
      else obj = { [Op.eq]: row.value }
      where[key] = obj  
    }
    else{
      const value = row.value
      if(row.type === 'gt') obj = { [Op.gt]: value }
      else if(row.type === 'lt') obj = { [Op.lt]: value }
      else if(row.type === 'iLike') obj = { [Op.iLike]: `%${value}` }
      else if(row.type === 'eq') obj = { [Op.eq]: value }
      else obj = { [Op.eq]: row.value }
      where[key] = obj  
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
export const getCountTable = async (tableName: string, where: any) => {
  return await sequelize.models[tableName].count(where)
}

/** 
** Сохранение изображения
* @function saveImage
* @param {String} table - Наименование таблицы
* @param {Number} id - Идентификатор
* @param {String} fileName - Имя файла
* @param {String} file - Данные файла
*/
export const saveImage = async (table: string, id: number, fileName: string | null, file: string) => {
  const base64Data = file.replace(/^data:([A-Za-z-+/]+);base64,/, '') // Данные файла
  if(!fs.existsSync(`./public/img/${table}/${id}`))  // Проверка существования директории 
    await fs.mkdirSync(`./public/img/${table}/${id}`)  // Создание директории
  await fs.writeFileSync(`./public/img/${table}/${id}/${fileName}`, base64Data, 'base64') // Запись данных в файл
  return { fileName, id }
}

/** 
** Удаление изображения
* @function delImage
* @param {String} path - путь к файлу 
*/
export const delImage = async (path: string | undefined) => {
  try {
    const checkFile = await fs.statSync(`./public/${path}`).isFile() // Проверка наличия файла
    if(checkFile) {
      await fs.unlinkSync(`./public/${path}`) // Удаление файла
      return true
    }
  }
  catch(err) {
    return 'Файл отсутствует'
  }
}

/** 
** Получение параметров для sql запроса
* @function getWhereSql
*/
export const getWhereSql = (params: any) => {
  if(!params) {
    return null
  }

  let result = ' WHERE ' // Результат формирования условия 
  const keys = Object.keys(params) // Получение ключей параметров 
  keys.forEach((key: any, index: number) => {
    let condition = ''
    
    switch(params[key].type) {
      case '=':
        condition = ' = '
        break
      case '>':
        condition = ' > '
        break
      case '>=':
        condition = ' >= '
        break
      case '<':
        condition = ' < '
        break
      case '<=':
        condition = ' <= '
        break
      case '%':
        condition = ' LIKE '
        break
      default:
        condition = ' = '
    }
    
    let isJson = false
    if(key.substring(0, 2) === 'o_') {
      isJson = key.split('_')[1]
    }


    if(isJson === false) {
      if(index === 0) {
        result += `  ${key} ${condition} '${condition === ' iLIKE ' ? '%' : ""}${params[key].value}${condition === ' iLIKE ' ? '%' : ""}' `
      }
      else result += ` AND ${key} ${condition} '${condition === ' iLIKE ' ? '%' : ""}${params[key].value}${condition === ' iLIKE ' ? '%' : ""}' `
    }
    else {
      let newKey = key.split('_').slice(2).join('_')
      if(index === 0) {
        result += ` WHERE ${isJson} ->> '${newKey}' ${condition} '${condition === ' iLIKE ' ? '%' : ""}${params[key].value}${condition === ' iLIKE ' ? '%' : ""}' `
      }
      else result += ` AND ${isJson} ->> '${newKey}' ${condition} '${condition === ' iLIKE ' ? '%' : ""}${params[key].value}${condition === ' iLIKE ' ? '%' : ""}' `

      // where information  ->> 'site' = '1'
    } 
  })


return result
}