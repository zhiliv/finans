import jwt from 'jsonwebtoken'
import { sequelize } from '~/server/db.js'
import {User, VerifyJWT} from '~/types/auth'

const config = useRuntimeConfig() // получение данных конфигурации
export default async function (event: any): Promise<User> {
  const {token} = parseCookies(event) // получение токена
  if (!token) throw new Error('Токен отсутствует') // отправка ошибки, если токена нет

  const verifyJWT: VerifyJWT | any = jwt.verify(token, config.secret_key) // получение значения верификации JWT по токену
  const id: number | null = verifyJWT?.id // Получение  идентификатор пользователя

  const user: User = await sequelize.models.users.findOne({ where: { id } }) // проверка данных пользователя в БД
  if (user && !user.id) throw new Error('Пользователь не найден')

  return user
}