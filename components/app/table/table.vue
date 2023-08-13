<template>
  <div ref="table">
    <div class="overflow-x-auto p-0 max-h-full w-full flex flex-wrap">
      <table class="table table-auto table-compact w-full">
        <thead class="sticky top-0 w-full z-50">
          <tr v-if="columns !== null" class="z-50">
            <th
              :class="{ 'text-left': column.labelPosition === `left`, 'text-center': column.labelPosition === `center`, 'text-right': column.labelPosition === `right` }"
              :width="column?.width" class="p-0 border-r border-zinc-300" v-for="column in columns" :key="column">
              <div class="bg-zinc-200 border-l border-t border-b p-2">
                <div class="z-100">
                  {{ column.label }}
                  <div v-if="column.filter === 'text'" class="w-full relative flex">
                    <app-select value="value" :options="listFilter" select-class="select-xs w-12 absolute left-0 bg-zinc-100" v-model="column.filterCondition"
                      :is-load="true" :select-value="listFilter[0].value" />
                    <app-input class="input-xs w-full" style="padding-left: 54px;" v-model.trim="column.filterValue" />
                    <app-button class="btn-xs absolute right-0 border-zinc-300 bg-zinc-100 hover:bg-zinc-400 text-lime-500"
                      @click="applyFilter(column.key, column.filterValue, column.filterCondition)">
                      <nuxt-icon loading="lazy" quality="90" name="mdi/check-bold" class="icon-apply" filled />
                    </app-button>
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody v-if="store.list" class="py-4" ref="tableBody">
          <tr v-for="row in store.list" :key="row.key" @click="onClick(row)" class="border-l" @dblclick="dblClick(row)">
            <template v-for="column in columns" :key="column">
              <th :style="{ width: column?.width, 'max-width': column?.width ? column?.width : '100px' }"
                :class="{ 'text-left': column.textPosition === `left`, 'text-center': column.textPosition === `center`, 'text-right': column.textPosition === `right` }"
                class="border-r border-zinc-300 font-normal truncate-text" v-bind="row">
                {{ row[column.key] }}
              </th>
            </template>
          </tr>
        </tbody>
      </table>
      <app-spinner v-show="!store.list && columns !== null" class="w-full" />
    </div>
    <pagination :count="store.count" @pagination="getPagination" :count-items="limit" />
  </div>
</template>

<script lang="ts" setup>
import pagination from './pagination/pagination.vue'
// let loading = true
/**
 * @interface Column
 * @member {String} key - Наименование колонки
 * @member {String} label - Текстовое значение имени колонки
 * @member {String} width - Ширина колонки
 * @member {String} textPosition - Положение текста
 * @member {String} labelPosition - Положение текста заголовка колонки
 * @member {String} filter - Тип фильтра
 * @member {Any} filterValue - Значение фильтра
 * @member {String} filterCondition - Тип условия отбора
 */
interface Column {
  key: string
  label: string
  width?: string
  textPosition?: 'left' | 'right' | 'center'
  labelPosition?: 'left' | 'right' | 'center'
  filter: 'text' | 'list'
  filterValue: string | number | boolean | null
  filterCondition: '=' | '>' | '<' | '%'
}

/**
 * @interface Props
 * @member {Array} columns - Список колонок
 * @member {Objert} store - Стор для обмена данными
 */
interface Props {
  columns: Column[] | any
  store: any
  limit?: number
}

/* Установка значений PROPS */
const props = withDefaults(defineProps<Props>(), {
  columns: null,
  store: { getList: () => { }, list: [] },
  limit: 50,
  
})

const offset = ref(0) // Значение сдвига
const table = ref() // Ссылка на элемент таблицы

const listFilter = ref([
  { value: '=', name: '=' },
  { value: '>', name: '>' },
  { value: '<', name: '<' },
  { value: '%', name: '%' }
]) // список статусов) 

await props.store.getCount() // Получение всех строк
await props.store.getList(props.limit, offset.value) // Получение всех строк


const tableBody = ref<any>() // Ссылка на таблица
const emit = defineEmits(['click', 'offset', 'dblclick'])

/**
 * @function dblClick
 * @param {Object} item - Данные выделенной строки
 */
function dblClick(item: any) {
  emit('dblclick', item)
}

/**
 * Примение фильтра
 * @function applyFilter
 * @param {String} key - Наименование ключа фильтра
 * @param {String} value - Значение фильтра
 */
function applyFilter(key: string, value: any, filterCondition: string) {
  console.log('🚀 -> applyFilter -> filterCondition:', filterCondition)
  props.store.setFilter(key, value, filterCondition)
}

/**
 * Событие пи одиночном клике на строку
 * @function onClick
 * @param {Object} item - Данные строки
 */
function onClick(item: any) {
  const index = props.store.list.findIndex((el: any) => el.id === item.id) // Получение индекса элемента
  const listEls = tableBody.value.querySelectorAll('tr') // Получение списка строк DOM модели
  listEls.forEach((el: any) => el.classList.remove('active')) // Удаление активного класса
  listEls[index].classList.add('active') // Добавление активного класса
  emit('click', item)
}

/* 
* Получение значения пагинации
* @function getPagination
*/
async function getPagination(value: any) {
  offset.value = value // Значение сдвига
  console.log('🚀 -> getPagination -> offset.value:', offset.value, (offset.value - 1) * props.limit)
  await props.store.getList(props.limit, ((offset.value - 1) * props.limit)) // Получение всех строк
}

onMounted(() => {
  table.value.style.height = table.value.parentNode.parentNode.offsetHeight - 140 + 'px' // Получение высоты родителя и присвоение значения таблице
  window.addEventListener("resize", () => { // отслеживание изменений размера окна
    table.value.style.height = table.value.parentNode.parentNode.offsetHeight - 140 + 'px'
  })
})

</script>

<style scoped>
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.active>* {
  background: #c7d2fe !important;
  color: #3f3f46;
}

.btn-group .active {
  background: #3730a3;
}

.icon-apply {
  font-size: 1em;
  fill: #166534;
}

.truncate-text {
  white-space: nowrap;
}
</style>