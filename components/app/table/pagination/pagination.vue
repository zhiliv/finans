

<template>
  <div ref="listPagination" class="btn-group justify-center w-full border-t py-3">
    <button class="btn btn-sm btn-primary hover:bg-indigo-400" @click="start" v-if="position > 0"> &#60; &#60; </button>
    <button class="btn btn-sm btn-primary hover:bg-indigo-400" @click="prew" v-if="position > 0"> &#60; </button>
    <button v-for="item in list[position]" :key="item" class="btn btn-sm btn-primary hover:bg-indigo-400" :class="{ active: item === pagination }"
      @click="select(item)">{{ item }}</button>
    <button class="btn btn-sm btn-primary hover:bg-indigo-400" @click="next" v-if="position < list.length - 1"> &#62; </button>
    <button class="btn btn-sm btn-primary hover:bg-indigo-400" @click="end" v-if="position < list.length - 1"> &#62; &#62; </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
/** 
* @interface Props
* @member {Number} count - Общее количество пагинаций
* @member {Number} countItems - Количество строк в таблице
*/
interface Props {
  count: number
  countItems?: number
}

const emit = defineEmits(['pagination'])

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  countItems: 50
})

const position = ref(0) // Позиция пагинации (сдвиг)

/** Список значений пагинации  */
const list = computed(() => {
  const countListPosition = Math.ceil(props.count / props.countItems) // Получение количества сдвигов пагинации
  const listPosition = Array.from({ length: countListPosition }, (_, i) => i + 1) // Формирование массива со всем списком пагинации
  let arrPagination: number[] = [] // Массив для хранения списка пагинации сдвига
  let checkNum = 0  // Переменная для подсчета количества в блоке списка
  const result: any[] = [] // Результативный массив
  listPosition.forEach((num: number, index: number) => {
    checkNum++
    arrPagination.push(num) // Добавление номера пагинации в блок
    if(checkNum === 5 || listPosition[index] === listPosition[listPosition.length-1]) {
      checkNum = 0
      result.push(arrPagination) // Добавление блока в список
      arrPagination = []
    }
  })
  return result
})

console.log('list', list.value)

const pagination = ref<number>(1) // Выбранное значение пагинации

/** 
* Выбор значения пагинации
* @function select
* @param {Number} num - Значение пагинации
*/
function select(num: number) {
  pagination.value = num
  emit('pagination', pagination.value)
}

/** 
* Сдвиг пагинации влево
* @function prew
*/
function prew() {
  position.value--
  pagination.value = list.value[position.value][4]
  emit('pagination', pagination.value)
}

/** 
* Сдвиг списка вправо
* @function next
*/
function next() {
  position.value++
  pagination.value = list.value[position.value][0]
  emit('pagination', pagination.value)
}

/** 
* В начало списка пагинации
* @function start
*/
function start(){
  position.value = 0
  pagination.value = list.value[position.value][0]
  emit('pagination', pagination.value)
}

/** 
* В конец списка пагинации
* @function end
*/
function end() {
  position.value = list.value.length-1
  pagination.value = list.value[position.value][list.value[position.value].length-1]
  emit('pagination', pagination.value)
}

</script>

<style scoped>
.active {
  background: #3730a3;
}
</style>