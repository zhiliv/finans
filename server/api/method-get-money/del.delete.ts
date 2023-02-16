import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const body = await readBody(event) // параметры запроса
  let result // переменная для получения  результата
  try {
    const optionsWhere = {where: {
      id: +body
    }}
    const count = await sequelize.models.method_get_money.count(optionsWhere) // получение количества записей с таким наименованием
    result = count === 0
      ? {message: 'Записи с таким идентификатором не существует'}
      : await sequelize.models.method_get_money.destroy(optionsWhere) /// добавление данных
  } catch (error) {
    result =
      error && error.errors && error.errors.length && error.errors[0].message
        ? { error: error.errors[0].message }
        : { error }
  }
  return result
})
