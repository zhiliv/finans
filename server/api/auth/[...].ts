import { sequelize } from '~/server/db.js'
import * as bcrypt from 'bcrypt' // модуль криптографии
import jwt from 'jsonwebtoken'
import { EnterAuthData, LoggerAuth } from '~/types/auth'
import { DateNow } from '~/server/utils/time'

const config = useRuntimeConfig() // получение данных конфигурации

/* Интерфейс результата ответа */
interface Result {
  statusCode: number // статус результата
  message: string | undefined // сообщение результата
}

export default defineEventHandler(async event => {
  const params: EnterAuthData = await readBody(event) // параметры запроса
  const ip: string = getClientAddress(event.node.req) // получение ip адреса клиента

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
    ip_adress: ip, // установка ip адреса
    token: null, // установка токена
  }


  if (params.login.length < 4 || params.password.length < 5) {
    // проверка длины логина или пароля
    result.statusCode = 400
    result.message = 'Не валидный логин или пароль'
    await logger(dataAuth)
  }

  const user: any = await sequelize.models.users.findOne({ where: { name: params.login } }) // проверка данных пользователя в БД

  let token // переменная для хранения токена
  if (user) {
    const checkHash = await bcrypt.compare(params.password, user.password_hash) // проверка пароля по хэшу
    if (checkHash) {
      token = jwt.sign({ id: user.id }, config.secret_key, { expiresIn: '1d' })
      result.statusCode = 200 // установка статуса
      dataAuth.user_id = user.id // установка идентификатора пользователя
      dataAuth.date_auth = DateNow() // установка даты авторизации
      setCookie(event, 'token', token, config.sessionOptions)
    } else {
      result.statusCode = 400 // установка статуса
    }
  }
  logger(dataAuth) // логирование
  return result.statusCode === 400 ? createError({ statusCode: result.statusCode, message: result.message }) : result
})

/*
 * Получение ip адреса клиента
 * @function getClientAddress
 * @param {Object} req - Запрос
 */
const getClientAddress = (req: any) => {
  const fullAdress = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress
  return fullAdress.replace('::ffff:', '')
}

/*
 * Добавление записи в таблицу логера авторизации
 * @function logger
 * @param {Object} authData - Данные для записи
 */
const logger = async (authData: LoggerAuth) => {
  sequelize.models.auth_logger.create(authData)
}
