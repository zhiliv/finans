import Sequelize from 'sequelize'
import { initModels } from '~/server/db-models/init-models'
const config = useRuntimeConfig()


export const sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, {
  host: config.database.host,
  port: config.database.port,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    useUTC: false
  },
  timezone: '+03:00' //Установка часового пояса
})
initModels(sequelize)
sequelize.authenticate()

/* 
const arrImgDir = [ 'organizations', 'offers' ] // список директорий для изображений
arrImgDir.forEach(dir => {
  if (!fs.existsSync(`public/img/${ dir }`)) fs.mkdirSync(`public/img/${ dir }`) // проверка наличия директории и создание если она отсутствует
}) */

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
  if(count === 0) {
    const hash = await getHashPassword(config.password_admin_start) // получение хэша пароля
    const user = {
      name: 'admin', // имя пользователя
      password_hash: hash, // хэш пароля
    }
    await sequelize.models.users.create(user).then((res: any) => {
      console.log('пользователь создан')
    })
  }
}

checkUsers()