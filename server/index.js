
import { sequelize } from '~/server/db.js'
import initModels from '~/server//db-models/init-models'
const config = useRuntimeConfig()
export default async () => {
  try {
    await sequelize.authenticate()
    await initModels(sequelize) // инициализация моделей
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
  const count = await  sequelize.models.users.count(optionsWhere) // проверка пользователя admin
  if(count === 0){
    const hash = await getHashPassword(config.password_admin_start) // получение хэша пароля
    const user = {
      name: 'admin', // имя пользователя
      password_hash: hash // хэш пароля
    }
    await sequelize.models.users.create(user).then(res => {
      console.log('пользователь создан')
    })
  }
}