export default {
  methods: {
    /* eslint-disable no-unused-vars */
    /*
     * Удаление пробелов
     * @function removeSpace
     * @param {String} string Строка, в которой необходимо удалить пробелы
     * @return {String} Строка без пробелов
     */
    removeSpace(string) {
      return isString(string) ? (string ? string.replace(/ /g, '') : '') : string
    },

    /*
     * Преобразование текста из формата camelCase в формат dash case
     * @function camelToDash
     * @param {String} text Преобразовываемое значение
     */
    camelToDash(text) {
      return isString(text) ? text.replace(/[A-Z]/g, m => '-' + m.toLowerCase()) : text
    },

    /*
     * Проверка является ли значение логическим типом
     * @function isBoolean
     * @param {Any} data Проверяемое значение
     * @return {Boolean} Результат проверки
     */
    isBoolean(data) {
      return typeof data === 'boolean'
    },

    /*
     * Проверка является ли значение строкой
     * @function isString
     * @param {Any} data Проверяемое значение
     * @return {Boolean} Результат проверки
     */
    isString(data) {
      return typeof data === 'string'
    },

    /*
     * Проверка, является ли значение числом
     * @function isNumber
     * @param {Any} data Проверяемое значение
     * @return {Boolean} Результат проверки
     */
    isNumber(data) {
      return data !== null || data !== undefined || data !== '' ? Number.isInteger(+data) : false
    },

    /*
     * Преобразование строки в логический тип
     * @function  strToBool
     * @param {String} data - Значение, которое необходимо преобразовать в логический тип
     */
    strToBool(data) {
      if (data === 'true' && isString(data)) return true
      else if (data === 'false' && isString(data)) return false
      else return data
    },

    /*
     * Преобразование строки в массив
     * @function strToArr
     * @param {String} data - Строка для преобразования
     */
    strToArr(data) {
      return data ? data.trim().split(' ') : []
    },

    /*
     * Добавление и удаление классов при наведении
     * @function hoverActive
     * @param {Object} element - элемент dom, которому необходимо добавить\удалить классы
     * @param {String} classes - классы, добавляемые \ удаляемые
     */
    addStringListClass(element, classes) {
      const arrClass = strToArr(classes)
      arrClass.forEach(cls => {
        element.classList.toggle(cls)
      })
    },

    /*
     * Клонирование объекта
     * @function cloneObject
     * @param {Object} obj - Объект для клонирования
     */
    cloneObject(obj) {
      return Object.assign({}, obj)
    },

    /*
     * Проверка пустоты объекта
     * Возвращает true если объект пустой
     * @function checkEmptyObject
     * @param {Object} obj - Проверяемый объект
     */
    checkEmptyObject(obj) {
      // eslint-disable-next-line no-unreachable-loop
      if (obj && typeof obj === 'object') for (const key in obj) return false
      return true
    },

    /*
     * Проверка что параметр - объект
     * @function checkObject
     * @param {Any} obj - Проверяемые данные
     */
    checkObject(obj) {
      return typeof obj === 'object'
    },

    /*
     * Сравнение объектов
     * Если объекты равны то значение true
     * @function withObject
     * @param {Object} obj1 - Первый объект для сравнения
     * @param {Object} obj2 - Второй объект для сравнения
     */
    withObject(obj1, obj2) {
      return obj1 && obj2 && this.checkObject(obj1) && this.checkObject(obj2)
        ? JSON.stringify(obj1) === JSON.stringify(obj2)
        : false
    },

    /*
     * Преобразование первого символа строки в верхний регистр
     * @function capitalize
     * @param {String} string - Текст
     */
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },

    /*
     * Обработка ошибок при получении запросов
     * @function processResponse
     * @param {Object} response - Данные ответа запроса
     */
    processResponse(response) {
      const { $showToast } = this
      const toastParams = {
        title: '', // заголовок сообщения
        timer: 5000, // таймер срабатывания
      } // параметры уведомления
      let status = false // статус обработки ответа
      if (response && response.error && response.error.value && response.error.value.status === 400) {
        toastParams.title = 'Ошибка: ' // заголовок сообщения
        toastParams.message = response.error.value.data.message // текст сообщения
        toastParams.class = 'alert-error' // тип сообщения
        console.error('Произошла ошибка при выполнении запроса: ', response)
      } else if (response && response.data && response.data.value && response.data.value.status === 200) {
        toastParams.class = response.data.value.typeMessage
          ? `alert-${response.data.value.typeMessage}`
          : 'alert-warning' // установка типа сообщения
        toastParams.message = response.data.value.message ? response.data.value.message : 'Успешно' // установка текста сообщения
        status = true // установка статуса обработки
      } else if (response && response.data && response.data.value && response.data.value.status === 217) {
        toastParams.class = response.data.value.typeMessage
          ? `alert-${response.data.value.typeMessage}`
          : 'alert-warning' // установка типа сообщения
        toastParams.message = response.data.value.message
          ? response.data.value.message
          : 'Внимание, операция не удалась' // установка текста сообщения
        console.warn('Операция не удалась: ', response)
      } else if (response && response.data && response.data.value && response.data.value.status === 202) {
        toastParams.class = 'alert-error'
        toastParams.message = response.data.value.message ? response.data.value.message : 'Успешно' // установка текста сообщения
      } else {
        toastParams.message = 'Неизвестная ошибка'
        toastParams.class = 'alert-error'
      }
      $showToast(toastParams) // отображение сообщения
      return status
    },

    /*
     * Обработка ошибок при получении списка через http-запрос
     * @function processingListResponse
     * @param {Object} error
     */
    processingListResponse(error) {
      const { $showToast } = this
      const toastParams = {
        title: 'Ошибка: ',
        timer: 5000,
        class: 'alert-error',
      }
      if (error && error.value && error.value.data.message) {
        toastParams.message = error.value.data.message
        $showToast(toastParams) // отображение сообщения
        return false
      } else return true
    },

  },
}
