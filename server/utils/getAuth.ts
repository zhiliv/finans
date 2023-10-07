import jwt from 'jsonwebtoken'
import { sequelize } from '~/server/db'
import { VerifyJWT } from '~/types/auth'
import { UserAuth } from '~/types/auth'
const config = useRuntimeConfig() // получение данных конфигурации

/**
 * Получение пользователя по идентификатору
 * @function getUser
 * @param {Number} id - Идентификатор пользователя
 */
const getUser = async (id: number | null) => {
  return await sequelize.models.users.findOne({ where: { id } })
    .then((res: any) => {
      return res.dataValues
    })
}


export default async function (event: any): Promise<UserAuth> {
  const { token } = parseCookies(event) // получение токена
  if(!token) throw new Error('Токен отсутствует') // отправка ошибки, если токена нет

  const verifyJWT: VerifyJWT | any = jwt.verify(token, config.secret_key) // получение значения верификации JWT по токену
  const id: number | null = verifyJWT?.id // Получение  идентификатор пользователя

  const user: UserAuth = await getUser(id)
  if(!user || (user && !user.id)) throw new Error('Пользователь не найден')

  return user
}