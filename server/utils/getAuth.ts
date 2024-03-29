import jwt from 'jsonwebtoken'
import { db } from '~/server/db'
import { VerifyJWT } from '~/types/auth'
import { UserAuth } from '~/types/auth'
import { users_schema } from '~/schemas/users_schema'
import { QueryArrayResult } from 'pg'
const config = useRuntimeConfig() // получение данных конфигурации

/**
 * Получение пользователя по идентификатору
 * @function getUser
 * @param {Number} id - Идентификатор пользователя
 */
const getUser = async (id: number | null): Promise<UserAuth | null | any> => {
  if(!id) { // Проверка на то что идентификатор передан
    return null
  }

  const columns: string[] | null = getColumnFromSchema(users_schema) // Получение колонок таблицы
  if(!columns) {
    return null
  }

  try {
    const sql: string = `SELECT ${columns.toString()} FROM ${users_schema.fullPath} WHERE id=$1 LIMIT 1` // формирование запроса
    const resultQuery: QueryArrayResult = await db.query(sql, [id]) // выполнение запроса
    if(!resultQuery) {
      return 'Не найдены данные о пользователе'
    }
    if(!resultQuery.rows.length) {
      return 'Не найдены данные о пользователе'
    }

    const rows: UserAuth[][] = resultQuery.rows
    const result: any = rows[0]

    return result
  }
  catch(err) {
    console.error('Ошибка: ', err)
    return null
  }

}


export default async function (event: any): Promise<UserAuth | null | string> {
  const { token } = parseCookies(event) // получение токена
  if(!token) throw new Error('Токен отсутствует') // отправка ошибки, если токена нет

  const verifyJWT: VerifyJWT | any = jwt.verify(token, config.secret_key) // получение значения верификации JWT по токену
  const id: number | null = verifyJWT?.id // Получение  идентификатор пользователя

  const user: UserAuth | null = await getUser(id) // Получение данных о пользователе
  if(!user) {
    return null
  }

  if(!user.id) throw new Error('Пользователь не найден')

  return user
}