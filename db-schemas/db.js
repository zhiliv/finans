/*
 * @module
 * Формирование исходных данных в базе данных
 */

const { Pool, Client } = require('pg') // модуль для работы с базой данных
const fs = require('fs') // модуль для работы с файловой системой
const config = require('../config/db.json') // получение конфигурации подключения
const DATABASE = 'finance' // Имя базы данных
const clc = require('cli-color')

/*
 * Проверка, создана ли база данных
 * @function checkDB
 * @return {Object} Возвращает результат запроса проверки создана ли база данных
 */
const checkDB = async () => {
  let result
  const client = new Client(config) // создание конфигурации подключения
  const queryCheck = `SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${DATABASE}')` // запрос для проверки существования БД
  const queryCreate = fs.readFileSync('./db-schemas/create_database.sql').toString() // запрос на создание БД
  await client.connect().then(async () => {
    // подключение к БД
    await client.query(queryCheck).then(async res => {
      if (res.rowCount === 0) {
        // проверка количества записей
        await client.query(queryCreate) // выполнение создания БД
        result = { message: 'База данных создана', status: false }
      } else {
        result = { message: 'База "finance" существует', status: true }
      }
    })
  })
  await client.end() // закрытие соединения
  return result
}

/*
 * Проверка существования схемы
 * @function checkSchemaCountry
 * @param {Object} pool - Пул подключения к бд
 * @param {String} name - Наименование схемы для проверки
 */
const getSchema = async (pool, name) => {
  const query = `SELECT schema_name FROM information_schema.schemata WHERE schema_name = '${name}'`
  return await pool.query(query)
}

/*
 * Проверка количества записей в таблице
 * @function getCountTable
 * @param {Object} pool - Пул подключения к БД
 * @param {String} schema - Наименование схемы
 * @param {String} name - Наименование таблицы для проверки
 */
const getCountTable = async (pool, schema, name) => {
  const query = `SELECT COUNT(*) FROM ${schema}.${name}`
  let result = await pool.query(query)
  return +result.rows[0].count
}

checkDB().then(async res => {
  res.status === true ? console.log(clc.green(res.message)) : console.log(clc.yellow(res.message))
  config.database = DATABASE // установка параметра имени базы данных
  const pool = new Pool(config) // создание пула
  let query // запрос
  const client = await pool.connect() // создание клиента
  console.log(clc.green('Соединение с базой данных успешно установлено'))
  try {
    await pool.query('BEGIN') // начало транзакции
    await getSchema(pool, 'country').then(async res => {
      // проверка наличия схемы country
      if (res.rowCount === 0) {
        query = fs.readFileSync('./db-schemas/schemas/country/schema_country.sql').toString() // получение DDL схемы country
        await pool.query(query).then(() => {
          console.log(clc.blue('Схема "country" создана!'), clc.yellow('Добавлены таблицы: regions, cities'))
        })
      }
    })
    await getCountTable(pool, 'country', 'regions').then(async res => {
      // проверка заполнения таблицы 'regions'
      if (res === 0) {
        query = fs.readFileSync('./db-schemas/schemas/country/data_regions.sql').toString() // чтение запроса для заполнения таблицы 'regions'
        await pool.query(query).then(() => {
          console.log('Данные успешно добавлены в таблицу "regions"')
        })
      }
    })
    await getCountTable(pool, 'country', 'cities').then(async res => {
      // проверка количества записей в таблице 'cities'
      if (res === 0) {
        query = fs.readFileSync('./db-schemas/schemas/country/data_cities.sql').toString() // чтение запроса для заполнения таблицы 'cities'
        await pool.query(query).then(() => {
          console.log('Данные успешно добавлены в таблицу "cities"')
        })
      }
    })
    await getSchema(pool, 'guide').then(async res => {
      // проверка наличия схемы country
      if (res.rowCount === 0) {
        query = fs.readFileSync('./db-schemas/schemas/guide/schema_guide.sql').toString() // получение DDL схемы country
        await pool.query(query).then(() => {
          console.log(clc.blue('Схема "guide" создана!'))
        })
      }
    })
    await getSchema(pool, 'controls').then(async res => {
      // проверка наличия схемы country
      if (res.rowCount === 0) {
        query = fs.readFileSync('./db-schemas/schemas/control/schema_control.sql').toString() // получение DDL схемы country
        await pool.query(query).then(() => {
          console.log(clc.blue('Схема "control" создана!'))
        })
      }
    })
    await getSchema(pool, 'prod').then(async res => {
      // проверка наличия схемы country
      if (res.rowCount === 0) {
        query = fs.readFileSync('./db-schemas/schemas/prod/schema_prod.sql').toString() // получение DDL схемы country
        await pool.query(query).then(() => {
          console.log(clc.blue('Схема "prod" создана!'))
        })
      }
    })
    await pool.query('COMMIT')
  } catch (err) {
    await pool.query('ROLLBACK')
    throw err
  } finally {
    client.release()
    pool.end(() => {
      console.log(clc.yellow('Соединение с базой данных закрыто'))
    })
  }
})
