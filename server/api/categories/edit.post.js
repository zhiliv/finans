import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const params = await readBody(event) // получение параметров
  const result = {} // переменная для хранения результата
  try {
    const optionWhere = {
      where: {
        id: params.id,
      },
    } // параметры условий обновления
    delete params.id // удаление свойства id
    delete params.isActive // удаление свойства isActive
    result.status = 200
    result.typeMessage = 'success'
    result.message = 'Запись обновлена успешно'
    result.data = await sequelize.models.categories.update(params, optionWhere) // выполнение обновления записи
    return result
  } catch (error) {
    let message = error.errors ? error.errors.map(el => el.message).join('\n') : ''
    if (error.original && error.original.hint) message += error.original.message + '; ' + error.original.hint
    throw createError({
      statusCode: 400, // установка статуса ответа
      message, // установка текста сообщения
    })
  }
})
