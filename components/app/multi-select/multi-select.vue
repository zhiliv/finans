<template>
  <div class="relative" :class="$attrs.class">
    <app-spinner v-if="isLoad === false || isLoad === 'false'" class="absolute top-[0.5em]" />
    <label class="label py-0 px-4">{{label}}</label>
    <select v-model="selected" class="select select-bordered w-full" :class="$attrs['select-class']">
      <option v-if="!options.length" disabled>Список пуст</option>
      <option v-if="options.length && required" disabled>Выберите значение</option>
      <div
        v-for="item in options"
        :key="item[value]"
        :value="item[value]"
        class="text-[1.35em]"
      >{{item[text]}}</div>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    /* Список  */
    options: {
      type: Array,
      default: [],
    },
    /* Подпись поля */
    label: {
      type: String,
      default: null,
    },
    /* Свойство для обозначения значения */
    value: {
      type: String,
      default: 'id',
    },
    /* Текстовое значение */
    text: {
      type: String,
      default: 'name',
    },
    /* Обязательность поля */
    required: {
      type: [Boolean, String],
      default: false,
      validator(value) {
        return value === true || value === false || value === 'true' || value === 'false'
      },
    },
    /* Статус загрузки */
    isLoad: {
      type: [String, Boolean],
      default: false,
      validator(value) {
        return value === true || value === false || value === 'true' || value === 'false'
      },
    },
    /* Индекс выделяемого элемента */
    selectValue: {
      type: [Number, String],
      default: null
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selected: null, // выделенная строка
      valueModel: null, // модель данных
    }
  },

  watch: {
    /*
     * Отслеживание изменений выбора пункта списка
     * @function selected
     * @param {Number} newValue - Новое значение
     */
    selected(newValue) {
      const { $emit } = this
      $emit('update:modelValue', newValue) // отправка события для обновления модели данных
    },

    /*
    * Отслеживание изменений передаваемого индекса
    * @function selectIndex
    */
    selectValue(newValue){
      if(newValue) this.selected = +newValue
    }
  },
}
</script>
