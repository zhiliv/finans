import { H3Event } from 'h3'
import { getList } from '~/server/utils/helper.js'
export default defineEventHandler(async (event: H3Event) => {
  return getList('categories')
})
