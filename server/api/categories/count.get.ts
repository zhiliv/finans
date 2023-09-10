import { H3Event } from 'h3'
import { getCountTable, getWhere } from '~/server/utils/helper.js'
export default defineEventHandler(async (event: H3Event) => {
  const params: any = getQuery(event)
  
  let options:any = {}
  if(params.where) options.where = getWhere('categories', params.where)
  
  return getCountTable('categories', options)
})
