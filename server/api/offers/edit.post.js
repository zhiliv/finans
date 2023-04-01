import { sequelize } from '~/server/db.js'

export default defineEventHandler(async event => {
  const t = await sequelize.transaction()
  const body = await readBody(event) // получение параметров
  if(body && body.image){
    const image = await sequelize.models.img_offers.findOne({where: {id_offer: body.id, path: body.image}})
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
    const offer = await sequelize.models.offers.update(body, params)
    console.log('🚀 -> offer:', offer)

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
