import { db } from '~/server/db'
import initModels from '~/server/db-models/init-models'
import * as fs from 'fs'
const config = useRuntimeConfig()

const arrImgDir = ['organizations', 'offers'] // список директорий для изображений
arrImgDir.forEach(dir => {
  if (!fs.existsSync(`public/img/${dir}`)) fs.mkdirSync(`public/img/${dir}`) // проверка наличия директории и создание если она отсутствует
})

export default async () => {
  console.log('инициализация')
  try {
    await sequelize.authenticate()
    
    checkUsers()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

/*
 * Проверка наличия в таблице пользователей
 * Если нет пользователей, то создаем пользователя admin
 * @function checkUsers
 */
const checkUsers = async () => {
  const optionsWhere = {
    where: {
      name: 'admin',
    },
  }
  const count = await sequelize.models.users.count(optionsWhere) // проверка пользователя admin
  if (count === 0) {
    const hash = await getHashPassword(config.password_admin_start) // получение хэша пароля
    const user = {
      name: 'admin', // имя пользователя
      password_hash: hash, // хэш пароля
    }
    await sequelize.models.users.create(user).then(res => {
      console.log('пользователь создан')
    })
  }
}
