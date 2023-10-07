import { sequelize } from '~/server/db'

export default defineEventHandler(async event => {
  const {models} = sequelize
  const t = await sequelize.transaction()
  const body = await readBody(event) // получение параметров
  if(body && body.image){
    const image = await models.img_offers.findOne({where: {id_offer: body.id, path: body.image}})
    body.img_offer_id = image.id
  }
  const result = {}
  try {
    const fields = [
      'name',
      'id_cpa',
      'description',
      'short_description',
      'sum_start',
      'sum_end',
      'free_period',
      'type_free_period',
      'period_min',
      'type_period_min',
      'period_max',
      'type_period_max',
      'review_time',
      'type_review_time',
      'age_start',
      'age_end',
      'percent_min',
      'type_percent_min',
      'percent_max',
      'type_percent_max',
      'profit',
      'description_profit',
      'url_offer',
      'site',
      'cr',
      'ar',
      'epc',
      'status',
      'type_profit',
      'img_offer_id'
    ]
    const params = { transaction: t, where: { id: body.id }, fields, returning: true }
    const offer = await models.offers.update(body, params)
    await models.link_get_money.destroy({where: {id_offer: body.id}}) // удаление записей 
    const arrMethodGetMoney = body.link_method_get_money.map(el => {
      return {
        id_offer: body.id,
        id_method_get_money: el
      }
    }) // формирование массива
    await models.link_get_money.bulkCreate(arrMethodGetMoney) // добавление массива способов получения денег для оффера
    await models.link_categories.destroy({where: {id_offer: body.id}}) // удаление всех категорий для оффера
    const arrCategories = body.link_categories.map(el => {
      return {
        id_offer: body.id,
        id_category: el
      }
    }) // формирование массива
    await models.link_categories.bulkCreate(arrCategories) // добавление массива категорий для оффера
    await t.commit()
    result.status = 200
    result.typeMessage = 'success'
    result.message = 'Запись обновлена успешно'
    result.data = offer[1][0]
    return result
  } catch (error) {


    // If the execution reaches this line, an error was thrown.
    // We rollback the transaction.
    await t.rollback()
  }
})
