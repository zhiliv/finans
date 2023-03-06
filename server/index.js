import { sequelize } from '~/server/db.js'
import initModels from '~/server//db-models/init-models'
export default async () => {
  try {
    await sequelize.authenticate()
    await initModels(sequelize) // инициализация моделей
    console.log('Соединение с базой данных успешно установлено')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
