import { sequelize } from '~/server/db.js'
import * as bcrypt from 'bcrypt' // модуль криптографии
import jwt from 'jsonwebtoken'
import { EnterAuthData, LoggerAuth } from '~/types/auth'
import { DateNow } from '~/server/utils/time'
import moment from 'moment'
import { Op } from 'sequelize'

const config = useRuntimeConfig() // получение данных конфигурации

/* Интерфейс результата ответа */
interface Result {
  statusCode: number // статус результата
  message: string | undefined // сообщение результата
}

export default defineEventHandler(async event => {
  deleteCookie(event, 'token') // удаление куки
  const params: EnterAuthData = await readBody(event) // параметры запроса
  
  const result: Result = {
    statusCode: 400, // установка статуса ответа
    message: '',
  }

  const dataAuth: LoggerAuth = {
    // объект данных авторизации
    user_id: null, // Идентификатор пользователя
    date_requiest: DateNow(), // установка даты запроса
    date_auth: null, // установка даты авторизации
    status: false,// установка статуса
    token: null, // установка токена
  }

  if (params.login.length < 4 || params.password.length < 5) {
    // проверка длины логина или пароля
    result.statusCode = 400
    result.message = 'Не валидный логин или пароль'
  }

  const user: any = await sequelize.models.users.findOne({ where: { name: params.login } }) // проверка данных пользователя в БД  
  if(!user) return createError({ statusCode: 200, message: 'неверный логин или пароль' }) 
  const countAuth = await checkCountAuth(user?.id)
  if(countAuth > 5) {
    dataAuth.user_id = user.id
    result.statusCode = 400 
    result.message = 'Превышено количество запросов авторизации. Доступ к авторизации будет доступен в течении 5 минут'
    await logger(dataAuth)
    return createError({ statusCode: result.statusCode, message: result.message })
  } 
  
  let token // переменная для хранения токена
  const checkHash = user?.id ? await bcrypt.compare(params.password, user.password_hash) : null // проверка пароля по хэшу
  if(user && user.id && countAuth <= 5 && checkHash) {
    
      token = jwt.sign({ id: user.id }, config.secret_key, { expiresIn: '1d' })
      result.statusCode = 200 // установка статуса
      dataAuth.user_id = user.id // установка идентификатора пользователя
      dataAuth.date_auth = DateNow() // установка даты авторизации
      setCookie(event, 'token', token, config.sessionOptions)
      logger(dataAuth) // логирование
  }
  else {
    dataAuth.user_id = user.id
    result.statusCode = 400 // установка статуса
    logger(dataAuth) // логирование
    result.message = 'Неверный логин или пароль'
  }
  
  
  
  return result.statusCode === 400 ? createError({ statusCode: result.statusCode, message: result.message }) : result
})

/*
 * Добавление записи в таблицу логера авторизации
 * @function logger
 * @param {Object} authData - Данные для записи
 */
const logger = async (authData: LoggerAuth) => {
  sequelize.models.auth_logger.create(authData)
}

/* 
* Проверка количества запросов авторизации по логину
* @function checkCountAuth
* @param {String} login - login адрес клиента
* @return {Number} - Количество записей
*/
const checkCountAuth = async  (user_id:string) => {
  if(user_id){
    const DateMinus5Minutes = moment().tz("Europe/Moscow").subtract(5, 'minutes') // получение даты минус 5 минут
    const params = {
      where: {
        user_id,
        date_requiest: {
          [Op.between]: [DateMinus5Minutes, DateNow()]   // получение диапазон между текущей датой и датой минус 5 минут
        }
      }
    }
    return await sequelize.models.auth_logger.count(params) // получение количества записей за 5 минут  
  }
  else return false
  
}