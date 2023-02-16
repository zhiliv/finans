import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const body = await readBody(event) // параметры запроса
  let result // переменная для получения  результата
  try {
    const optionsWhere = {
      where: {
        name: body.name
      },
    }
    const count = await sequelize.models.method_get_money.count(optionsWhere) // получение количества записей с таким наименованием
    result =
      count === 0
        ? await sequelize.models.method_get_money.create(body) /// добавление данных
        : { warning: 'Запись с таким наименование уже существует' }
  } catch (error) {
    result =
      error && error.errors && error.errors.length && error.errors[0].message
        ? { error: error.errors[0].message }
        : { error }
  }
  return result
})
