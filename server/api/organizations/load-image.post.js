import * as fs from 'fs'
import { sequelize } from '~/server/db.js'
import { Op } from 'sequelize'

export default defineEventHandler(async event => {
  const query = getQuery(event) // получение параметра запроса
  const { files } = await useFiles(event) // получение файла
  const filename = Buffer.from(files[0].filename, 'latin1').toString('utf8') // получение имени файла в кодировке utf-8
  if (await !fs.existsSync(`public/img/organizations/${query.id}`))
    await fs.mkdirSync(`public/img/organizations/${query.id}`) // проверка наличия директории и создание если она отсутствует
  await fs.writeFileSync(`public/img/organizations/${query.id}/${filename}`, files[0].buffer) // запись файла
  let path = `organizations/${query.id}/${filename}` // полный путь к файлу
  if (!checkFile(path)) return { status: 'warning', message: 'Такой файла уже существует в директории' } // возврат результата с сообщением
  if ((await getCount(path, query.id)) > 0) return { status: 'warning', message: 'Данные о файле уже существую в БД' } // возврат результата с ошибкой
  const paramsCreate = {
    id_organization: query.id, // идентификатор организации
    path, // пусть к файлу
  }
  await sequelize.models.img_organization.create(paramsCreate) // создание записи
  return { status: 'success', message: `Файл: ${filename} \n Успешно добавлен`, path } // возврат записи с успешным результатом
})

/*
 * Получение количества записей с этим путем изображения
 * @function getCount
 * @return {Number} Количество записей
 */
const getCount = async (path, id_organization) => {
  const paramsQuery = {
    where: {
      [Op.and]: [
        { path }, // путь к файлу
        { id_organization }, // идентификатор организации]
      ],
    },
  } // параметры  запроса для получения количества записей
  return await sequelize.models.img_organization.count(paramsQuery)
}

/*
 * Проверка наличия файла с таким же именем
 * @function checkFile
 * @params {String} path - Путь к файлу
 * @return {Boolean} Результат проверки наличия файла(true - такой файл существует)
 */
const checkFile = async path => {
  return fs.existsSync(path)
}
