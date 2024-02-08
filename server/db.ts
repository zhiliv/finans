import pg from 'pg'

const config = useRuntimeConfig()

export const db = new pg.Client({
  host: config.database.host,
  port: config.database.port,
  database: 'finance',
  user: 'postgres',
  password: '1',
})

await db.connect()


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
/* const checkUsers = async () => {
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

checkUsers() */