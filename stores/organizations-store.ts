import { defineStore } from 'pinia'
import { Query } from '~/types/query'
import { Organization } from '~/types/organization'

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

export const useOrganizationsStore = defineStore('organizations', () => {
  const list = ref<Organization[]>([]) // Список строк таблицы
  const count = ref<number>(0) // Количество записей в БД в таблице "organization"
  const loading = ref<boolean>(true) // Статус загрузки
  const error = ref<any>(true) // Данные об ошибке
  const limit = ref<number>(50) // Лимит выбора строк
  const offset = ref<number>(0) // Сдвиг
  const selectParams = ref<SelectParams>({ offset, limit, order: JSON.stringify([['name', 'ASC']]) }) // Параметры для запроса
  const where = ref<any>({}) // Условия отбора данных
  const filterCondition = ref<any>() // Данные фильтрации

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
      if(filterCondition === '>') typeFilter = '>'
      else if(filterCondition === '>=') typeFilter = '>='
      else if(filterCondition === '<') typeFilter = '<'
      else if(filterCondition === '<=') typeFilter = '<='
      else if(filterCondition === '%') typeFilter = 'like'
      else if(filterCondition === '=') typeFilter = '='
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
    let url = `/api/organizations/all?limit=${selectParams.value.limit}&offset=${selectParams.value.offset}&order=${selectParams.value.order}`
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
    const paramsQuery: Query = { url: `/api/organizations/record?id=${id}`, method: 'get' } // параметры запроса
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


  return { list, loading, error, getList, setFilter, getCount, count, limit, offset, filterCondition, addNewRecord, getRecord, editRecord, deleteRecord }
})
