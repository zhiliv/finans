import { sequelize } from '~/server/db.js'
import {QueryTypes } from 'sequelize'

export default defineEventHandler(async event => {
  const body = await readBody(event) // параметры запроса
  const result = await sequelize.models.type_docs.create(body) /// добавление данных
  return result
})
