import { sequelize } from '~/server/db.js'
export default defineEventHandler(async event => {
  try {
    const query = `SELECT
    offers.id,
    offers.name,
    offers.id_cpa,
    offers.description,
    offers.short_description,
    offers.sum_start,
    offers.sum_end,
    offers.free_period,
    offers.type_free_period,
    offers.period_min,
    offers.type_period_min,
    offers.period_max,
    offers.type_period_max,
    offers.review_time,
    offers.type_review_time,
    offers.age_start,
    offers.age_end,
    offers.percent_min,
    offers.type_percent_min,
    offers.percent_max,
    offers.type_percent_max,
    offers.profit,
    offers.description_profit,
    offers.url_offer,
    offers.cr,
    offers.ar,
    offers.epc,
    offers.status,
    offers.type_profit,
    img.path AS image,
    (SELECT
      array_agg(path)
    FROM
      prod.img_offers AS img
    WHERE img.id_offer = offers.id) AS images,
        (SELECT array_agg(id_category) FROM prod.link_categories AS link WHERE link.id_offer = offers.id) AS link_categories,
        (SELECT array_agg(id_method_get_money) FROM prod.link_get_money AS link WHERE link.id_offer = offers.id) AS link_method_get_money
        FROM prod.offers AS offers
        LEFT JOIN prod.img_offers AS img ON img.id = offers.img_offer_id
      `
    let result = await sequelize.query(query, { raw: true }) // получение результата запроса
    return result[0] // возврат результата
  } catch (error) {
    let message = ''
    message = error && error.errors && error.errors.length ? error.errors.map(el => el.message).join('\n') : ''
    if (error.original && error.original.hint) message = error.original.message + '; ' + error.original.hint
    throw createError({
      statusCode: 400, // установка статуса ответа
      message, // установка текста сообщения
    })
  }
})
