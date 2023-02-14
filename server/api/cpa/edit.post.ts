import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const body = await readBody(event) // получение параметров
  let result // переменная для хранения результата
  try {
    const optionWhere = {
      where: {
        id: +body.id,
      },
    } // параметры условий обновления
    delete body.id
    delete body.isActive
    result = await sequelize.models.cpa.update(body, optionWhere) // выполнение обновления записи=
  } catch (error) {
    result =
      error && error.error && error.error.length && error.error[0].message
        ? { error: error.errors[0].message }
        : { error }
  }
  return result
})
