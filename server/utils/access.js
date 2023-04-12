import { sequelize } from '~/server/db.js'
import * as bcrypt from 'bcrypt'
const config = useRuntimeConfig() // получение конфигурации

export const getAccess = async  () => {

}

/*
* Получение соли для хэша
* @function getSalt
*/
export const getSalt = async () => {
  return await bcrypt.genSalt(+config.saltRounds)
}

/*
* Получение хэша пароля
* @function getHashPassword
* @param {String} password - Значение пароля
*/
export const getHashPassword = async (password) => {
  const salt = await getSalt()
  return password && salt ? await bcrypt.hash(password, salt) : false
}

/*
* Проверка введенного пароля по хэшу
* @function checkHashPassword
* @param {String} password - Значение пароля
* @param {String} hash - Значение хэша пароля
*/
export const checkHashPassword = async (password, hash) => {
  return password && hash ? await bcrypt.compare(password, hash) : false
}

/*
* Получение ролей пользователя
* @function getUserRoles
*/
export const getUserRoles  = async () => {

}