import Sequelize from 'sequelize'
const config = useRuntimeConfig()

export const sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, {
  host: config.database.host,
  port: config.database.post,
  dialect: 'postgres',
  logging: false,
})
