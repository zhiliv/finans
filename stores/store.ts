import { defineStore } from 'pinia'
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
  offset?: number | any
  limit?: number | any
  where?: any
  order?: string
}

export const useStore = defineStore('store', () => {
  const list = ref<any>([]) // Список строк таблицы
  const count = ref<number>(0) // Общее количество
  const loading = ref<boolean>(true) // Статус загрузки
  const error = ref<any>(true) // Данные об ошибке
  const limit = ref<number>(50) // Лимит выбора строк
  const offset = ref<number>(0) // Сдвиг
  const selectParams = ref<SelectParams>({ offset, limit, order: JSON.stringify([['name', 'ASC']]) }) // Параметры для запроса
  const where = ref<any>({}) // Условия отбора данных
  const filterCondition = ref<any>() // Данные фильтрации
  const urlApi = ref<string>('') // Ссылка на api для получения списка

  /*
   * Назначение условий отбора
   * @function setFilter
   * @param {String} key - Наименование ключа условий отбора
   * @param {String} value - Значение условий отбора
   */
  async function setFilter(key: string, value: any, filterCondition: string) {
    if(!value) delete where.value[key]
    // Удаляем из объекта свойство, если поле поиска пустое

    else {
      let typeFilter:string // Значение фильтра
      if(filterCondition === '>') typeFilter = 'gt'
      else if(filterCondition === '<') typeFilter = 'lt'
      else if(filterCondition === '%') typeFilter = 'iLike'
      else if(filterCondition === '=') typeFilter = 'eq'
      else typeFilter = 'eq'
      where.value[key] = {type: typeFilter, value}
    }

    await getList()
  }

  /**
   * Получение списка всех категорий
   * @function getList
   */
  async function getList(limit?: number, offset?: number) {
    let url = `${urlApi.value}/all?limit=${limit || selectParams.value.limit}&offset=${offset || selectParams.value.offset}&order=${selectParams.value.order}`
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

  /*
   * Получение общего количества записей
   * @function getCount
   * @params {String} where - Условия отбора
   */
  async function getCount() {
    let url = !checkEmptyObject(where.value) ? `${urlApi.value}/count?where=${JSON.stringify(where.value)}` : `${urlApi.value}/count` // Проверка на наличие дополнительных параметров получения количества
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

  return { list, loading, error, getList, setFilter, getCount, count, limit, offset, filterCondition, urlApi }
})

