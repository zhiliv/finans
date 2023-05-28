import { sequelize } from '~/server/db.js'
import { H3Event } from 'h3'
import { Response } from '~/types/query'
import { getErrorResponse, getList } from '~/server/utils/helper.js'

export default defineEventHandler(async (event: H3Event) => { 
  return getList('cpa')
})
