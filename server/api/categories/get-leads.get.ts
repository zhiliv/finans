import * as http from 'http'
import { sequelize } from '~/server/db.js'
const config = useRuntimeConfig()

/*
 * Получение данных о категорий по api Leads.su
 * @function getList
 */
const getList = async () => {
  return new Promise((resolve, reject) => {
    let result = '' // результат полученных данных
    const url = 'http://api.leads.su/webmaster/dictionary/categories?token=' // ссылка для получения способов получения денег
    const token = config.token_leads // получение токена из файла конфигурации процесса

    /* Получение данных по ссылке */
    http.get(`${url}${token}`, res => {
      res.on('data', data => {
        // получение данных
        result += data // добавление полученных данных в результат
      })
      res.on('end', () => {
        // при окончании получения данных
        result = JSON.parse(result) // преобразование полученного результат в JSON
        resolve(result) // возврат результат в промисе
      })
    })
  })
}

/*
* Добавление записей
* @function addItems
* @param {Array} list - Список
*/
const addItems = async  (list) => {
  for await (const item of list) {
    // обработка списка
    delete item.id // удаление идентификатора
    const optionsWhere = {
      where: {
        name: item.name,
      },
    }
    const count = await sequelize.models.categories.count(optionsWhere) // получение количества записей с таким наименованием
    if (count === 0) await sequelize.models.categories.create(item) // создание записи
  }
}

export default defineEventHandler(async event => {
  let list:any = await getList()
  list = list.data
  await addItems(list)
  return true
})
