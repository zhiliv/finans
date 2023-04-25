import { sequelize } from '~/server/db.js'
import * as bcrypt from 'bcrypt'
const config = useRuntimeConfig() // получение конфигурации

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
export const getHashPassword = async password => {
  const salt = await getSalt()
  return password && salt ? await bcrypt.hash(password, salt) : false
}

