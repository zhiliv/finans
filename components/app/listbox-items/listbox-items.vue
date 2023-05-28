<template>
  <div class="h-full relative w-full shadow-2xl shadow-zinc-300/30" :class="$attrs.class">
    <ul
      ref="listView"
      class="list-group h-full absolute w-full overflow-y-scroll overflow-x-hidden"
    >
      <li
        v-for="item in listItems"
        class="min-h-[35px] border-b border-zinc-300/10 hover:bg-amber-700"
        :class="{'active': item.isActive}"
        :key="item[value]"
        @click="onSelect(item)"
      >
        {{item[text]}}
        <button
          v-if="onDelete"
          class="btn-xs btn-square btn-outline absolute right-0 mr-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="deleteItem(item)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </li>
    </ul>
    <app-spinner v-show="loading" />
  </div>
</template>

<script lang="ts" setup>
import { Confirm } from '~/types/confirm'
import { Query } from '~/types/query'

/**
 * @interface Props
 * @member {Array} list - Список
 * @member {String} value - Свойство значения строки
 * @member {String} text - Свойство текста строки
 * @member {Object} modelValue - Значение поля
 * @member {Boolean} loading - Статус загрузки
 * @member {Function} onDelete - Функция удаления элемента
 * @member {Number} selectIndex - Индекс выбираемого элемента
 * @member {String} urlName - Ссылка
 */
interface Props {
  list?: any
  value?: string
  text?: string
  modelValue: any
  loading: boolean
  onDelete: any
  selectIndex?: number
  urlName?: string
}

const props = withDefaults(defineProps<Props>(), {
  list: [],
  value: 'id',
  text: 'name',
  modelValue: {},
  loading: true,
  onDelete: () => ({}),
  selectIndex: -1,
  urlName: '',
})

const emit = defineEmits(['update:modelValue', 'delete'])

/* Ссылка на отображаемый список */
const listView = ref()
/* Формирование списка для вывода */
const listItems = computed(() => props.list)

/* Наблюдатель за изменением индекса выделяемого элемента */
watch(
  () => props.selectIndex,
  (newVal: any) => {
    if (newVal !== -1) {
      clickIndex(newVal)
    }
  },
  { deep: true },
)

/* Отслеживание статуса загрузки списка */
watch(
  () => props.loading,
  newVal => {
    if (props?.list?.length) clickIndex()
  },
  { deep: true },
)

/**
 * Выполнение клика по строке списка по индексу
 * @function clickIndex
 * @param {Number} index - Порядковый номер выбираемого элемента
 */
async function clickIndex(index?: number | null | undefined) {
  if (!index && index !== -1) index = 0
  if (props?.list?.length) {
    await nextTick() // Ожидание обновления прорисовки списка
    listView.value.querySelectorAll('li')[index].click()
  }
}

/**
 * @function onSelect
 * @param {Object} item - Объект события
 */
function onSelect(item: any) {
  listItems.value.forEach((el: any) => (el.isActive = false)) // Удаления активности со всех элементов
  item.isActive = true // установки активности текущему элементу
  const obj = cloneObject(item) // Клонирование объекта
  delete obj.isActive // Удаление свойства
  emit('update:modelValue', obj) // Отправка события
}

/**
 * Удаление выделенного элемента
 * @function onDeleteItem
 * @para, {String} URL - Путь
 * @param {Object} item - Данные строки
 */
async function deleteItem(item: any) {
  const confirmParam: Confirm = {
    message: 'Удалить запись?',
  } // Параметры сообщения подтверждения
  let result = false
  const confirm: Boolean | unknown = await dialogConfirm(confirmParam) // Отображение окна подтверждения
  if (confirm) {
    const paramsQuery: Query = { url: `/api/${props.urlName}/del`, method: 'delete', body: item.id }
    const response: any = await query(paramsQuery) // Отправка запроса на удаление
    if (response?.data?.value?.status == 200) {
      showToast({ message: response.data.value.message, type: 'success' }) // Обработка результата
      result = true
    }
    emit('delete', result)
  }
}
</script>

<style>
    .list-group li {
      padding-left: 0.5em;
      padding-top: 0.25em;
      font-size: 18px;
    }

    .list-group li:hover {
      background: var(--primary);
      color: var(--light);
    }

    .list-group li.active {
      background: #b45309;
    }

    .list-group li.active:hover {
      background: #d97706;
    }
</style>
