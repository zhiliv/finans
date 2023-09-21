<template>
  <div class="modal-mask select-none " v-show="isShow && form">
    <div :class="{ 'modal-wrapper': !isDrawer }">
      <div class="modal-container border-2" :class="{'right-0': isDrawer && position === 'right', 'left-0': position === 'left', 'absolute': isDrawer,  'h-full': isDrawer }" :style="{ width: valueModel?.options?.width || '50%' }">
        <div class="body-modal max-h-full">
          <div class="p-1 border-b mb-2 text-center ">
            <span class="text-lg px-4">{{ valueModel?.options?.title }}</span>
          </div>
          <div class="overflow-y-auto pb-4" ref="subForm" >            
            <component :is="form" v-model="valueModel" @valid="getValid" @data="getData" />
          </div>
        </div>
        <div class="bottom-0 p-2 w-full border-t" :class="{'h-10': isDrawer, 'h-16': !isDrawer }">
          <app-button v-if="buttons.cancel" class="m-1 standart btn-sm btn-error" @click="close">Отменить</app-button>
          <app-button v-if="buttons.save" class="btn-success m-1 standart btn-sm float-right" :disabled="disabled.save"
            @click="onSave">Сохранить</app-button>
          <app-button v-if="buttons.no" class="w-20 m-1 standart btn-sm btn-error" @click="onNo">Нет</app-button>
          <app-button v-if="buttons.yes" class="w-20 btn-success m-1 standart btn-sm float-right" @click="onYes">Да</app-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { listComponents } from './async-list-components'
const data = ref() // Полученные данные формы
const isDrawer = ref(false) // Признак дровера
const disabled = ref({
  save: true,
  cancel: false
})
const components: any = reactive(listComponents) // Компоненты, которые можно выводить в дровер
const buttons = ref({
  save: false, // Кнопка "Сохранить"
  close: false, // Кнопка "Закрыть"
  cancel: true, // Кнопка Отменить
  new: false, // Кнопка "Создать" 
  yes: false, // Кнопка "Да"
  no: false // Кнопка "Нет"
}) // Список кнопок в футере формы
const form = ref() // Ссылка на вложенную форму
const isShow = ref(false) // Статус отображения модального окна
const subForm = ref() // Тело модального окна
const valueModel = ref() // Данные формы
const formUuid = ref() // Уникальный идентификатор формы
const position = ref('right') // Позиция дровера
const text = ref('') // Текстовое значение формы

/** Прием события для показа формы  */
emitter.on('show-modal', (event: any) => {
  valueModel.value = event
  setButtons(valueModel.value?.options?.buttons)
  formUuid.value = event.formUuid
  form.value = components[event.form] // получение тела формы
  isDrawer.value = valueModel.value.options.isDrawer
  text.value = valueModel.value.options.text
  isShow.value = true // Отображение модальной формы
  /** Прием события для уничтожения формы  */
  emitter.on(`destroy-modal-${event.formUuid}`, () => {
    form.value = null
  })
})

/** 
* Установка доступности кнопок
* @function setButtons
* @param {Object} _buttons - Список кнопок 
*/
const setButtons = (_buttons:any) => {
  buttons.value.cancel = _buttons?.cancel ? _buttons?.cancel : false
  buttons.value.save = _buttons?.save ? _buttons?.save : false
  buttons.value.yes = _buttons?.yes ? _buttons?.yes : false
  buttons.value.no = _buttons?.no ? _buttons?.no : false
}

/** 
* Закрытие модального окна
* @function close
*/
function close(_data?: any) {
  emitter.emit(`close-modal-${formUuid.value}`, _data?.value || null) // отправка события для для закрытия формы
}

/** 
* Получение значения валидации
* @function getValid
*/
function getValid(valid: any) {
  disabled.value.save = valid.save
}

/** 
* Получение данных с дочерней формы
* @function getData
* @param {Objet} _data - Полученные данные 
*/
function getData(_data: any) {
  data.value = _data
}

/** 
* Событие при нажатии на кнопку "Сохранить"
* @function onSave
*/
function onSave() {
  close(data)
}

/** 
* Событие при нажатии на кнопку "Да"
* @function onYes
*/
function onYes(){
  const data = {value: true}
  close(data)
  
}

/** 
* Событие при нажатии на кнопку "Нет"
* @function onNo
*/
function onNo(){
  close()
}

onUpdated(() => {
  if(subForm.value) subForm.value.style.height = 'auto'
  if(isDrawer.value === true){
    subForm.value.style.height = subForm.value.parentNode.parentNode.offsetHeight - 110 + 'px' // Получение высоты родителя и присвоение значения таблице
    window.addEventListener("resize", () => { // отслеживание изменений размера окна
       subForm.value.style.height = subForm.value.parentNode.parentNode.offsetHeight - 110 + 'px' // Получение высоты родителя и 
    }) 
  }
})
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  padding: 3%;
}

.modal-container {
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
  padding-bottom: 0px;
}

@media (max-width: 767.9px) {
  .modal-container {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .modal-container {
    width: 98% !important;
  }
}

@media (max-width: 1200px) {
  .drawer-modal {
    width: 100% !important;
  }
}
</style>