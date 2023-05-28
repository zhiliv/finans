import mitt from 'mitt'
import { Confirm } from '~/types/confirm'
import { Query } from '~/types/query'
import { useFetch } from 'nuxt/app'
import { Toast } from '~/types/toast'
import { uuid } from 'vue-uuid'

export const emitter = mitt()

/*
 * Удаление пробелов
 * @function removeSpace
 * @param {String} data Строка, в которой необходимо удалить пробелы
 * @return {String} Строка без пробелов
 */
export const removeSpace = (data: string) => (isString(data) ? (data ? data.replace(/ /g, '') : '') : data)

/*
 * Преобразование текста из формата camelCase в формат dash case
 * @function camelToDash
 * @param {String} data Преобразовываемое значение
 */
export const camelToDash = (data: string) =>
  isString(data) ? data.replace(/[A-Z]/g, m => '-' + m.toLowerCase()) : data

/*
 * Проверка является ли значение логическим типом
 * @function isBoolean
 * @param {Any} data Проверяемое значение
 * @return {Boolean} Результат проверки
 */
export const isBoolean = (data: any) => typeof data === 'boolean'

/*
 * Проверка является ли значение строкой
 * @function isString
 * @param {Any} data Проверяемое значение
 * @return {Boolean} Результат проверки
 */
export const isString = (data: any) => typeof data === 'string'

/*
 * Проверка, является ли значение числом
 * @function isNumber
 * @param {Any} data Проверяемое значение
 * @return {Boolean} Результат проверки
 */
export const isNumber = (data: any) =>
  data !== null || data !== undefined || data !== '' ? Number.isInteger(+data) : false

/*
 * Преобразование строки в логический тип
 * @function  strToBool
 * @param {String} data - Значение, которое необходимо преобразовать в логический тип
 */
export const strToBool = (data: string) => {
  if (data === 'true' && isString(data)) return true
  else if (data === 'false' && isString(data)) return false
  else return data
}

/*
 * Преобразование строки в массив
 * @function strToArr
 * @param {String} data - Строка для преобразования
 */
export const strToArr = (data: string) => (data ? data.trim().split(' ') : [])

/*
 * Клонирование объекта
 * @function cloneObject
 * @param {Object} obj - Объект для клонирования
 */
export const cloneObject = (obj: any) => Object.assign({}, obj)

/*
 * Проверка пустоты объекта
 * Возвращает true если объект пустой
 * @function checkEmptyObject
 * @param {Object} obj - Проверяемый объект
 */
export const checkEmptyObject = (obj: any) => {
  if (obj && typeof obj === 'object') for (const key in obj) return false
  return true
}

/*
 * Проверка что параметр - объект
 * @function checkObject
 * @param {Any} obj - Проверяемые данные
 */
export const checkObject = (obj: any) => typeof obj === 'object'

/*
 * Сравнение объектов
 * Если объекты равны то значение true
 * @function withObject
 * @param {Object} obj1 - Первый объект для сравнения
 * @param {Object} obj2 - Второй объект для сравнения
 */
export const withObject = (obj1: any, obj2: any) =>
  obj1 && obj2 && checkObject(obj1) && checkObject(obj2) ? JSON.stringify(obj1) === JSON.stringify(obj2) : false

/*
 * Преобразование первого символа строки в верхний регистр
 * @function capitalize
 * @param {String} data - Текст
 */
export const capitalize = (data: string) => data.charAt(0).toUpperCase() + data.slice(1)

/*
 * Получение ссылки для изображений
 * @function getUrlImage
 */
export const getUrlImage = (url: string) => `/img/${url}`

/*
 * Отображение модального окна подтверждения действия
 * @function showConfirm
 * @param {Object} args - Аргументы
 * @param {String} args.confirmText - Текст кнопки подтверждения
 * @param {String} args.cancelText - Текст кнопки отмены
 * @param {String} args.message - Текст сообщения
 */
export const dialogConfirm = async (args: Confirm) => {
  emitter.emit('show-confirm', args || {}) // Отправка события
  const listenCloseConfirm = () => {
    // Прослушивание события для закрытия окна
    return new Promise((resolve, reject) => {
      emitter.on('close-confirm', (response: any | Boolean) => {
        resolve(response) // Возврат результата
      })
    })
  }
  const result: Boolean | unknown = await listenCloseConfirm()
  return result
}

/*
 * Отображение уведомления
 * @function showToast
 * @param {Object} args - Аргументы
 */
export const showToast = async (args: Toast) => {
  emitter.emit('show-toast', args)
}

/*
 * Отправка ассинхронного http-запроса с обработкой результата
 * @function query
 */
export const query = async (args: Query) => {
  const response = await useFetch(args.url, args)
  if (response.error.value) showToast({ type: 'error', message: response.error.value.message })
  if (response.data.value && response.data.value.status === 202)
    showToast({ type: 'warning', message: response.data.value.message })
  if (response.data) return response
}

/*
 * Показать модальное окно
 * @function showModal
 * @param {String} nameForm - Имя формы
 * @param {Object} event - Объект события
 */
export const showModal = async (nameForm: string, event: any) => {
  if (!event) event = {}
  event.formUuid = uuid.v4() // Добавление идентификатора формы
  event.form = nameForm // Передача значения имени формы
  emitter.emit(`show-modal`, event) // Отправка события для показа модального окна
  /* Создание ожидания ответа закрытия модального окна для возврата результата */
  const listenCloseModal = () => {
    return new Promise((resolve, reject) => {
      emitter.on(`close-modal-${event.formUuid}`, (eventClose: any) => {
        // прослушивание уникального события закрытия окна
        emitter.emit(`destroy-modal-${event.formUuid}`) // отправка события для скрытия окна
        delete eventClose.modalTitle
        delete eventClose.formUuid
        delete eventClose.form
        resolve(eventClose) // получение ответа в promise
      })
    })
  }
  const result = await listenCloseModal() // возврат результата
  return result
}

/** 
* Создание новой записи
* @function newRecord
* @param {String} message - Сообщение при создании 
* @param {String} url - Ссылка на создание записи
*/
export const newRecord = async (message: string, url: string, modalName: string = 'modal_name') => {
  const body: any = await showModal(modalName, { modalTitle: message })
  if(body){
    body.name = capitalize(body.name)
    const paramsQuery: Query = { url, method: 'post', body } // параметры запроса
    const response: any = await query(paramsQuery) // Отправка запроса на сохранение данных
    if (response?.data?.value?.status == 200) {
      showToast({ message: response.data.value.message, type: 'success' }) // Отображение уведомления
      return response.data.value.data.id
    }
  }
}