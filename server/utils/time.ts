import moment from 'moment'

/*
 * Получение текущей даты
 * @function DateNow
 */
export const DateNow = () => {
  return moment().tz('Europe/Moscow').format()
}
