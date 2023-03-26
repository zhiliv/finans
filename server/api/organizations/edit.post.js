import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const t = await sequelize.transaction() // создание транзакции
  const body = await readBody(event) // получение параметров
  if(body && body.image){
    const image = await sequelize.models.img_organization.findOne({where: {id_organization: body.id, path: body.image}})
    body.img_organization_id = image.id
    console.log('🚀 -> body.img_organization_id:', body.img_organization_id)
  }
  const result = {}
  try {
    const fields = ['name', 'short_description', 'description', 'site', 'img_organization_id']
    const params = { transaction: t, where: { id: body.id }, fields, returning: true } // параметры запроса
    const edit = await sequelize.models.organizations.update(body, params) // обновление записи
    await t.commit() // коммит транзакции
    result.status = 200
    result.typeMessage = 'success'
    result.message = 'Запись обновлена успешно'
    result.data = edit[1][0]
    return result
  } catch (error) {
    await t.rollback() // отмена транзакции
  }
})
