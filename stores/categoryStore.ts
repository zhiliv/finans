import { defineStore } from 'pinia'
import { Category } from '~/types/categories'
import { Query } from '~/types/query'

export const useCategoryStore = defineStore('category', () => {
  const list = ref<any>([]) // Список категорий
  const item = ref<Category | null>(null) // Категория
  const loading = ref<boolean>(true) // Статус загрузки
  const error = ref<any>(true) // Ошибка
  const updateData = ref<any>({}) // Данные обновления

  /**
   * Получение списка всех категорий
   * @function getAll
   */
  async function getAll() {
    loading.value = true
    const {data, error: err } = await  useLazyFetch('/api/categories/all') // Получение данных
    list.value = data.value
    error.value = err.value ? true : false // Установка статуса ошибки
    err.value ? showToast({ message: err.value.data.message, type: 'error' }) : (loading.value = false)
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

  return { list, item, loading, updateData, error, getAll, getCategoryLeads }
})
