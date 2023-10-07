import { sequelize } from '~/server/db'
import * as bcrypt from 'bcrypt' // модуль криптографии
import jwt from 'jsonwebtoken'
import { EnterAuthData, LoggerAuth } from '~/types/auth'
import { DateNow } from '~/server/utils/time'
import moment from 'moment'
import { Op } from 'sequelize'
import { Response } from '~/types/query'
import { UserAuth } from '~/types/auth'
const config = useRuntimeConfig() // получение данных конфигурации

const getUser = (params: EnterAuthData) => {
  return sequelize.models.users.findOne({ where: { name: params.login } })
    .then((res: any) => {
      return res.dataValues
    })
}

export default defineEventHandler(async event => {
  deleteCookie(event, 'token') // удаление куки
  const params: EnterAuthData = await readBody(event) // параметры запроса
  const response: Response = {
    status: 400, // установка статуса ответа
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

  if(params.login.length < 4 || params.password.length < 5) { // проверка длины логина или пароля
    response.status = 200
    response.message = 'Не валидный логин или пароль'
    return createError(response)
  }

  const user: UserAuth = await getUser(params)
  // user = user.dataValues
  if(!user?.id) {
    response.status = 401
    response.message = 'Неверный логин или пароль'
    return createError(response)
  }

  const countAuth = await checkCountAuth(user?.id) // Получение количества подключений
  if(countAuth > 500) {
    dataAuth.user_id = user?.id
    response.status = 401
    response.message = 'Превышено количество запросов авторизации. Доступ к авторизации будет доступен в течении 5 минут'
    await logger(dataAuth)
    return createError(response)
  }

  let token // переменная для хранения токена
  const checkHash = user?.id ? await bcrypt.compare(params.password, user.password_hash) : null // проверка пароля по хэшу
  if(user && user.id && countAuth <= 500 && checkHash) {
    token = jwt.sign({ id: user.id }, config.secret_key, { expiresIn: '1d' })
    response.status = 200 // установка статуса
    dataAuth.user_id = user.id // установка идентификатора пользователя
    dataAuth.date_auth = DateNow() // установка даты авторизации
    dataAuth.token = token
    setCookie(event, 'token', token, config.sessionOptions)
    setCookie(event, 'user', user.name, config.sessionOptions)
    setCookie(event, 'user_id', String(user.id), config.sessionOptions)
    logger(dataAuth) // логирование
    return response
  }
  else {
    dataAuth.user_id = user.id
    response.status = 400 // установка статуса
    response.message = 'Неверный логин или пароль'
    logger(dataAuth) // логирование
    return response
  }
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
const checkCountAuth = async (user_id: number) => {
  if(user_id) {
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