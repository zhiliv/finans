import { defineStore } from 'pinia'
import { Category } from '~/types/categories'
import { Query } from '~/types/query'

/**
 * @interface QueryParams
 * @member {Number} offset - Сдвиг записей
 * @member {Number} limit - Количество записей
 * @member {Object} where - Условия отбора записи
 * @member {String} order - Поле сортировки
 * @member {boolean} desc - Сортировка по убыванию
 */
type SelectParams = {
  offset?: number
  limit?: number 
  where?: any
  order?: string
}

export const useCategoryStore = defineStore('category', () => {
  const list = ref<any>([]) // Список категорий
  const count = ref<number>(0) // Количество записей
  const item = ref<Category | null>(null) // Категория
  const loading = ref<boolean>(true) // Статус загрузки
  const error = ref<any>(true) // Ошибка
  const updateData = ref<any>({}) // Данные обновления
  const limit = ref<any>(50)
  const offset = ref<any>(0)
  const selectParams = ref<SelectParams>({ offset, limit, order: JSON.stringify([['name', 'ASC']]) }) // Параметры для запроса
  const where = ref<any>({}) // Условия отбора
  const filterCondition = ref<any>()
  
  /*
   * Назначение условий отбора
   * @function setFilter
   * @param {String} key - Наименование ключа условий отбора
   * @param {String} value - Значение условий отбора
   */
  async function setFilter(key: string, value: any, filterCondition: string) {
    console.log('🚀 -> setFilter -> value:', value)
    console.log('🚀 -> setFilter -> key:', key)
    if (!value) delete where.value[key]
    // Удаляем из объекта свойство, если поле поиска пустое
    else where.value[key] = `${value}`
    await getList()
  }

  /**
   * Получение списка всех категорий
   * @function getList
   */
  async function getList(limit?: number, offset?: number) {
    let url = `/api/categories/all?limit=${limit || selectParams.value.limit}&offset=${offset || selectParams.value.offset}&order=${selectParams.value.order}`
    if (!checkEmptyObject(where.value)) url += `&where=${JSON.stringify(where.value)}`
    try {
      loading.value = true
      const paramsQuery: Query = {
        url: url, // TODO добавить параметры фильтрации
        method: 'get',
      }
      let response: any = await query(paramsQuery) // Отправка запроса на удаление
      await getCount()
      list.value = response.data.value // Отправка запроса на удаление
    } catch (err: any) {
      error.value = err.value ? true : false // Установка статуса ошибки
      err.value ? showToast({ message: err.value.data.message, type: 'error' }) : (loading.value = false)
    }
  }

  /*
   * Получение общего количества записей
   * @function getCount
   * @params {String} where - Условия отбора
   */
  async function getCount() {
    let url = `/api/categories/count`
    if (!checkEmptyObject(where.value)) url += `?where=${JSON.stringify(where.value)}`
    try {
      const paramsQuery: Query = {
        url, // TODO добавить параметры фильтрации
        method: 'get',
      }
      let response: any = await query(paramsQuery) // Отправка запроса на удаление
      count.value = response.data.value // Отправка запроса на удаление
    } catch (err: any) {
      error.value = err.value ? true : false // Установка статуса ошибки
      err.value ? showToast({ message: err.value.data.message, type: 'error' }) : (loading.value = false)
    }
  }

  /*
   * Получение списка категорий с сайта Leads.su
   * @function getCategoryLeads
   */
  async function getCategoryLeads() {
    await useLazyFetch('/api/categories/all') // Получение данных
  }

  /**
   * Обвовление данных в БД
   * @function update
   * @param {Object} data - Данные для обновления
   */
  async function update(data: any) {
    const paramsQuery: Query = { url: '/api/categories/edit', method: 'post', body: data.value }
    resultUpdateCategory.value = await query(paramsQuery) // Отправка запроса на удаление
  }

  return { list, item, loading, updateData, error, getList, getCategoryLeads, setFilter, getCount, count, limit, offset, filterCondition }
})
