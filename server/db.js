import fs from 'fs' // модуль для работы с файловой системой
import Sequelize from 'sequelize'
import initModels from './db-models/init-models'

let config = fs.readFileSync('config.json').toString() // чтение конфигурации
config = JSON.parse(config) // преобразование в JSON

export const sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, {
  host: config.database.host,
  port: config.database.post,
  dialect: 'postgres',
  logging: false,
})
;(async () => {
  try {
    await sequelize.authenticate()
    await initModels(sequelize) // инициализация моделей
    console.log('Соединение с базой данных успешно установлено')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()
