<template>
  <div ref="table" class="w-full pr-1 md:max-w-full md:min-w-full md:flex  flex-wrap h-full max-md:pt-10">
    <div class="sm:flex flex-row w-full mr-3">
      <div v-for="(column, index) in columns" :key="column" class="border-l border-b border-t border-zinc-300"
        :class="{ 'w-full': !column?.width, 'border-r': index === columns.length - 1 }" :style="{ 'min-width': column?.width }">
        <div class="bg-zinc-200 border-l border-t border-b pl-1 pr-1 w-full min-h-[55px] ">
          <div class="z-100 text-zinc-700 text-sm font-medium pl-1">
            {{ column.label }}
          </div>
          <div v-if="column.filter === 'text'" class="w-full flex relative">
            <app-select value="value" :options="listFilter" select-class="select-sm w-14 absolute left-0 bg-zinc-100" v-model="column.filterCondition"
              :is-load="true" :select-value="listFilter[0].value" />
            <app-input class="input-sm w-full " style="padding-left: 60px;" v-model.trim="column.filterValue" />
            <app-button class="btn-sm absolute right-0 border-zinc-300 bg-zinc-100 hover:bg-zinc-400 text-lime-500"
              @click="applyFilter(column.key, column.filterValue, column.filterCondition)">
              <nuxt-icon loading="lazy" quality="90" name="mdi/check-bold" class="icon-apply" filled />
            </app-button>
          </div>
          <div v-if="column.filter === 'number'" class="w-full relative flex">
            <app-input class="input-sm w-full " v-model.trim="column.filterValue" />
            <app-button class="btn-sm absolute right-0 border-zinc-300 bg-zinc-100 hover:bg-zinc-400 text-lime-500"
              @click="applyFilter(column.key, column.filterValue, column.filterCondition)">
              <nuxt-icon loading="lazy" quality="90" name="mdi/check-bold" class="icon-apply" filled />
            </app-button>
          </div>
        </div>
      </div>
    </div>
    <app-spinner v-show="!store.list" class="w-full" />
    <div ref="tableBody" class="overflow-y-auto min-h-full w-full">
      <div class="md:flex lg:h-[35px]  border-zinc-300 row-table max-md:border-b-2 md:border-t hover:bg-gray-100" v-for="row in store.list" :key="row.key" @click="onClick(row)"
        @dblclick="dblClick(row)">
        <div v-for="(column, index) in columns" :key="column" class="md:border-l  pl-2"
          :class="{ 'w-full': !column?.width, 'border-r': index === columns.length - 1 }" :style="{ 'min-width': column?.width }">
          <span class="font-medium sm:hidden" v-if="row[column.key]">{{ column.label }}</span>
          <div class="h-full  truncate-text pt-1 w-full max-md:pl-6 max-md:py-2">
            {{ row[column.key] }}
          </div>
        </div>
      </div>
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
  filter: 'text' | 'list' | 'number'
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
  limit: 50
})

const offset = ref(0) // Значение сдвига
const table = ref() // Ссылка на элемент таблицы



defineExpose({
  applyFilter, columns: props.columns, table
})

const listFilter = ref([
  { value: '=', name: '=' },
  { value: '>', name: '>' },
  { value: '<', name: '<' },
  { value: '%', name: '%' }
]) // список статусов) 

await props.store.getCount() // Получение всех строк
props.store.limit = props.limit
props.store.offset = offset.value
await props.store.getList() // Получение всех строк


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
 * Применение фильтра
 * @function applyFilter
 * @param {String} key - Наименование ключа фильтра
 * @param {String} value - Значение фильтра
 */
function applyFilter(key: string, value: any, filterCondition: string) {
  props.store.setFilter(key, value, filterCondition)
}

/**
 * Событие пи одиночном клике на строку
 * @function onClick
 * @param {Object} item - Данные строки
 */
function onClick(item: any) {
  const index = props.store.list.findIndex((el: any) => el.id === item.id) // Получение индекса элемента
  const listEls = tableBody.value.querySelectorAll('.row-table') // Получение списка строк DOM модели
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
  props.store.limit = props.limit
  props.store.offset = ((offset.value - 1) * props.limit)
  await props.store.getList() // Получение всех строк
}

onMounted(() => {
  if(window.outerHeight > 800)
    tableBody.value.style.height = table.value.parentNode.parentNode.offsetHeight - 185 + 'px'
  window.addEventListener("resize", () => { // отслеживание изменений размера окна
    if(window.outerHeight > 800)
      tableBody.value.style.height = table.value.parentNode.parentNode.offsetHeight - 185 + 'px'
  })
})


</script>

<style scoped>
.truncate-text {
  margin: 0;
  /* Убираем внешний отступ */
  -webkit-line-clamp: 1;
  /* Число отображаемых строк */
  display: -webkit-box;
  /* Включаем флексбоксы */
  -webkit-box-orient: vertical;
  /* Вертикальная ориентация */
  overflow: hidden;
  /* Обрезаем всё за пределами блока */
}

.icon-apply {
  font-size: 1em;
  fill: #166534;
}
</style>