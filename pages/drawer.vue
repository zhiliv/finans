<template>
  <div class="modal-mask select-none" v-show="isShow && bodyModal">
    <div>
      <div class="modal-container border-2 right-0 absolute h-full drawer-modal" :style="{ width: '50%' }">
        <div class="body-modal ">
          <div class="h-auto  p-1 border-b mb-2 text-center ">
            <span class="text-lg px-4">{{ valueModel?.title }}</span>
          </div>
          <keep-alive v-if="bodyModal" :input-data="valueModel">
            <component :is="bodyModal" v-bind="valueModel" />
          </keep-alive>
        </div>
        <div class="absolute bottom-0 p-2 w-full border-t">
          <app-button class="m-1 btn-standart md:btn-sm btn-error" @click="close">Закрыть</app-button>
          <app-button class="m-1 btn-standart md:btn-sm float-right" @click="onSave">Сохранить</app-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { listComponents } from './async-list-components'
/** 
* @interface Props
* @member {Function} onSave - Сохранение данных
*/
interface Props {
  onSave?: any
}

const props = withDefaults(defineProps<Props>(), {
  onSave: () => {}
})

const components:any = reactive(listComponents) // Компоненты, которые можно выводить в дровер


const isShow = ref(false) // Статус отображения модального окна
const bodyModal = ref() // Тело модального окна
const valueModel = ref() // Данные формы
const formUuid = ref() // Уникальный идентификатор формы

/** Прием события для показа формы  */
emitter.on('show-drawer', (event: any) => {
  valueModel.value = event 
  formUuid.value = event.formUuid
  bodyModal.value = components[event.form]
  isShow.value = true // Отображение модальной формы
  /** Прием события для уничтожения формы  */
  emitter.on(`destroy-modal-${event.formUuid}`, () => {
    bodyModal.value = null
  })
})

/** 
* Закрытие модального окна
* @function close
*/
function close() {
  emitter.emit(`destroy-modal-${formUuid.value}`) // отправка события для для закрытия формы
}
</script>

<style>
@media (max-width: 1200px) {
  .drawer-modal {
    width: 100% !important;
  }
}
</style>