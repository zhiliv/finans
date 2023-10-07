<template>
  <template v-for="modal in modals" :key="modal.formUuid">
    <div class="modal-mask select-none" v-show="modal.isShow && modal.form">
      <div :class="{ 'modal-wrapper': !modal.isDrawer }">
        <div class="modal-container border-2"
          :class="{ 'right-0': modal?.isDrawer && modal?.position === 'right', 'left-0': modal?.position === 'left', 'absolute': modal.isDrawer, 'h-full': modal.isDrawer }"
          :style="{ width: modal.data.options?.width || '50%' }">
          <div class="body-modal max-h-full">
            <div class="p-1 border-b mb-2 text-center ">
              <span class="text-lg px-4">{{ modal.title }}</span>
            </div>
            <div class="overflow-y-auto pb-4 pl-2 pr-2" ref="subForm">
              <component :is="modal.form" v-model="modal.valueModel" @valid="getValid" @data="getData" />
            </div>
          </div>
          <div class="bottom-0 p-2 w-full border-t" :class="{ 'h-10': modal.isDrawer, 'h-16': !modal.isDrawer }">
            <app-button v-if="modal.buttons.cancel" class="m-1 standart btn-sm btn-error" @click="close">Отменить</app-button>
            <app-button v-if="modal.buttons.save" class="btn-success m-1 standart btn-sm float-right" :disabled="disabled.save"
              @click="onSave">Сохранить</app-button>
            <app-button v-if="modal.buttons.no" class="w-20 m-1 standart btn-sm btn-error" @click="close">Нет</app-button>
            <app-button v-if="modal.buttons.yes" class="w-20 btn-success m-1 standart btn-sm float-right" @click="onYes">Да</app-button>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<script lang="ts" setup>
import { listComponents } from './async-list-components'
const modals: any = ref([]) // Массив с модальными окнами
const data = ref() // Полученные данные формы
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
const subForm = ref() // Тело модального окна

/** Прием события для показа формы  */
emitter.on('show-modal', (event: any) => {
  setButtons(event.options?.buttons)
  const modal: any = {
    data: event,
    buttons: buttons.value,
    formUuid: event.formUuid,
    form: components[event.form],
    isDrawer: event.options?.isDrawer,
    text: event.options.text,
    isShow: true, // Отображение модальной формы
    title: event.options?.title,
    position: event.options?.position || 'right',
    valueModel: event
  }
  modals.value.push(modal)
  /** Прием события для уничтожения формы  */
  emitter.on(`destroy-modal-${event.formUuid}`, () => {
    modals.value.pop()
  })
})

/** 
* Установка доступности кнопок
* @function setButtons
* @param {Object} _buttons - Список кнопок 
*/
const setButtons = (_buttons: any) => {
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
  emitter.emit(`close-modal-${modals.value[modals.value.length-1].formUuid}`, _data?.value || null) // отправка события для для закрытия формы
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
function onYes() {
  const data = { value: true }
  close(data)

}

/** 
* При обновлении формы 
*/
onUpdated(() => {
  subForm.value.forEach((el: HTMLElement) => el.style.height = 'auto')
  modals.value.forEach((el: any) => {
    if(el.isDrawer === true) {
      subForm.value.forEach((el: any) => {
        el.style.height = el.parentNode.parentNode.offsetHeight - 110 + 'px'
        window.addEventListener("resize", () => { // отслеживание изменений размера окна
          el.style.height = el.parentNode.parentNode.offsetHeight - 110 + 'px' // Получение высоты родителя и 
        })
      })
    }
  })
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