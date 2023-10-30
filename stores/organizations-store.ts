import { defineStore } from 'pinia'
import { Query } from '~/types/query'
import { uploadData } from '~/types/upload'

/**
 * @interface QueryParams
 * @member {Number} offset - Сдвиг записей
 * @member {Number} limit - Количество записей
 * @member {Object} where - Условия отбора записи
 * @member {String} order - Поле сортировки
 */
type SelectParams = {
  offset?: number | any
  limit?: number | any
  where?: any
  order?: string
}

/** 
** Описание сущности "Изображения"
* @type Image
* @param {Number} id - Идентификатор
* @param {String} name - Имя изображения
* @param {String} path - Путь к изображения
* @param {Boolean} isLicense - Признак лицензии
* @param {Boolean} isNew - Признак нового изображения
* @param {Boolean} isDel - Признак удаления изображения
* @param {String} label - Описание изображения
* @param {Boolean} isMain - Главное описание изображения
*/
export type Image = {
  id: number
  name: string
  path: string
  isLicense?: boolean
  isNew?: boolean
  idDel?: boolean
  isMain?: boolean
}

/**
** Описание сущности "Данные организации"
* @type Information
* @param { String } Ur_name - Юридическое название организации
* @param { Array } Ur_address - Адреса организации
* @param { String } Ur_name - Юридическое наименование
* @param { String } description - Описание
* @param { String } short_description - Короткое описание
* @param { String } site - Сайт организации
* @param { Array } images - Изображения организации
* @param { Number } INN - ИНН организации
* @param { Number } OGRN - ОГРН организации
* @param { Array } phones - Номера телефонов
*/
export type Information = {
  Ur_name: string | null
  Ur_address: string | null
  description: string | null
  short_description: string | null
  site: string | null
  INN: number | null
  OGRN: number | null
  phones: string | null
}

/** 
** Описание сущности организации 
* @type Organization
* @param {Number} id - Идентификатор
* @param {String} name - Наименование
* @param {Object} data - Данные организации
* @param {Array} images - Список изображений
*/
export type Organization = {
  id: number | null
  name: string | null
  information: Information | string | any
  images: Image[]
}

export const useOrganizationsStore = defineStore('organizations', () => {
  const list = ref<any>([]) // Список строк таблицы
  const count = ref<number>(0) // Общее количество
  const loading = ref<boolean>(true) // Статус загрузки
  const error = ref<any>(true) // Данные об ошибке
  const limit = ref<number>(50) // Лимит выбора строк
  const offset = ref<number>(0) // Сдвиг
  const selectParams = ref<SelectParams>({ offset, limit, order: JSON.stringify([['name', 'ASC']]) }) // Параметры для запроса
  const where = ref<any>({}) // Условия отбора данных
  const filterCondition = ref<any>() // Данные фильтрации
  const table = ref<string>('organizations') // Получение наименования таблицы

  /**
   * Назначение условий отбора
   * @function setFilter
   * @param {String} key - Наименование ключа условий отбора
   * @param {String} value - Значение условий отбора
   * @param {String} filterCondition - тип фильтрации
   */
  async function setFilter(key: string, value: any, filterCondition: string) {
    if(!value) delete where.value[key]
    // Удаляем из объекта свойство, если поле поиска пустое

    else {
      let typeFilter: string // Значение фильтра
      if(filterCondition === '>') typeFilter = 'gt'
      else if(filterCondition === '<') typeFilter = 'lt'
      else if(filterCondition === '%') typeFilter = 'iLike'
      else if(filterCondition === '=') typeFilter = 'eq'
      else typeFilter = 'eq'
      where.value[key] = { type: typeFilter, value }
    }

    await getList()
  }

  /**
   * Получение списка всех организация
   * @function getList
   * @param {String} _url - Ссылка для api
   */
  async function getList() {
    let url = `/api/organizations/all?limit=${selectParams.value.limit}&offset=${selectParams.value.offset}&order=${selectParams.value.order}&table=${table.value}`
    if(!checkEmptyObject(where.value)) url += `&where=${JSON.stringify(where.value)}`
    try {
      loading.value = true
      const paramsQuery: Query = {
        url, // TODO добавить параметры фильтрации
        method: 'get'
      }
      let response: any = await query(paramsQuery) // Отправка запроса на удаление
      await getCount()
      list.value = response.data.value // Отправка запроса на удаление
    } catch(err: any) {
      error.value = err.value ? true : false // Установка статуса ошибки
      err.value ? showToast({ message: err.value.data.message, type: 'error' }) : (loading.value = false)
    }
  }

  /**
   * Получение общего количества записей
   * @function getCount
   * @param {String} _url - Ссылка для api
   */
  async function getCount() {
    let url = !checkEmptyObject(where.value) ? `/api/organizations/count?where=${JSON.stringify(where.value)}&limit=${selectParams.value.limit}&offset=${selectParams.value.offset}` : `/api/organizations/count?limit=${selectParams.value.limit}&offset=${selectParams.value.offset}` // Проверка на наличие дополнительных параметров получения количества
    try {
      const paramsQuery: Query = {
        url, // TODO добавить параметры фильтрации
        method: 'get'
      }
      let response: any = await query(paramsQuery) // Отправка запроса на удаление
      count.value = response.data.value || 0 // Отправка запроса на удаление
    } catch(err: any) {
      error.value = err.value ? true : false // Установка статуса ошибки
      err.value ? showToast({ message: err.value.data.message, type: 'error' }) : (loading.value = false)
    }
  }

  /** 
  * Добавление новой записи
  * @function addNewRecord
  * @param {Object} data - Данные для добавления
  * @param {String} _url - Ссылка для api
  */
  async function addNewRecord(data: any) {
    data.table = table.value // Установка параметра имени таблицы
    const paramsQuery: Query = { url: `/api/fetch/add`, method: 'put', body: data } // параметры запроса
    try {
      let response: any = await query(paramsQuery) // Отправка запроса на добавление данных
      await getList()
      return response.data
    }
    catch(err: any) {
      error.value = err.value ? true : false // Установка статуса ошибки
      showToast({ message: err.value.data.message, type: 'error' })
    }
  }

  /** 
  * Редактирование записи
  * @function editRecord
  * @param {Object} data - Данные для добавления
  * @param {String} _url - Ссылка для api
  */
  async function editRecord(data: any) {
    data.table = table.value // Установка параметра имени таблицы
    const paramsQuery: Query = { url: `/api/organizations/edit`, method: 'post', body: data } // параметры запроса
    try {
      let response: any = await query(paramsQuery) // Отправка запроса на редактирование данных
      await getList()
      return response.data
    }
    catch(err: any) {
      error.value = err?.value ? true : false // Установка статуса ошибки
      showToast({ message: err?.value?.data?.message || err, type: 'error' })
    }
  }

  /** 
  * Получение данных записи 
  * @function getRecord
  * @param {Number} id - Идентификатор для получения записи
  * @param {String} _url - Ссылка для api
  */
  async function getRecord(id: number) {
    const paramsQuery: Query = { url: `/api/organizations/record?id=${id}&table=${table.value}`, method: 'get' } // параметры запроса
    try {
      let response: any = await query(paramsQuery) // Отправка запроса на получение данных
      return response.data
    }
    catch(err: any) {
      error.value = err.value ? true : false // Установка статуса ошибки
      showToast({ message: err.value.data.message, type: 'error' })
    }
  }

  /** 
  * Удаление записи
  * @function deleteRecord
  * @param {Object} data - Данные для удаления
  * @param {String} _url - Ссылка для api
  */
  async function deleteRecord(data: any) {
    data.table = table.value // Наименование таблицы
    const paramsQuery: Query = { url: `/api/organizations/delete`, method: 'delete', body: data } // параметры запроса
    try {
      let response: any = await query(paramsQuery) // Отправка запроса на удаление
      await getList()
      return response.data
    }
    catch(err: any) {
      error.value = err.value ? true : false // Установка статуса ошибки
      showToast({ message: err.value.data.message, type: 'error' })
    }
  }


  return { list, loading, error, getList, setFilter, getCount, count, limit, offset, filterCondition, addNewRecord, getRecord, editRecord, deleteRecord, table }
})
