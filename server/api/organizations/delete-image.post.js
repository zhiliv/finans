import * as fs from 'fs'
import { sequelize } from '~/server/db'
import { Op } from 'sequelize'

export default defineEventHandler(async event => {
  const params = await readBody(event) // параметры запроса
  const queryParams = {
    where: {
      [Op.and]: [
        {path: params.path},
        {id_organization: params.id_organization}
      ]
    }
  }
  let resDel = await sequelize.models.img_organization.destroy(queryParams)
  if(resDel === 1) {
    fs.unlinkSync(`public/img/${params.path}`)
    return {status: 'success', message: 'Файл удален успешно'}
  }
  else return {status: 'error', message: 'Произошла ошибка при удалении файла'}
})