import Sequelize from 'sequelize'
import initModels from './db-models/init-models'
const config = useRuntimeConfig()

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
