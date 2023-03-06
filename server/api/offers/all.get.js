import { sequelize } from '~/server/db.js'
export default defineEventHandler(async event => {
  try {
    const query = `SELECT
    id,
    name,
    id_cpa,
    description,
    short_description,
    sum_start,
    sum_end,
    free_period,
    type_free_period,
    period_min,
    type_period_min,
    period_max,
    type_period_max,
    review_time,
    type_review_time,
    age_start,
    age_end,
    percent_min,
    type_percent_min,
    percent_max,
    type_percent_max,
    profit,
    description_profit,
    url_offer,
    site,
    cr,
    ar,
    epc,
    status,
    type_profit,
        (SELECT array_agg(id_category) FROM prod.link_categories AS link WHERE link.id_offer = offers.id) AS link_categories,
        (SELECT array_agg(id_method_get_money) FROM prod.link_get_money AS link WHERE link.id_offer = offers.id) AS link_method_get_money
        FROM prod.offers AS offers
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
