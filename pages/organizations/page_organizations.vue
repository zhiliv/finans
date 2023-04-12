<template>
  <div class="w-full h-[calc(100vh-28px-70px)] items-start lg:py-0 py-1 bg-stone-800">
    <div class="items-start h-full">
      <div class="grid grid-cols-12 h-full">
        <div class="lg:col-span-3 col-span-12 h-full mx-4 lg:mx-0 min-h-[200px]">
          <app-listbox-items
            :list="list"
            class="border border-gray-400 bg-stone-700 min-h-[100%]"
            v-model="selectedItem"
            :is-load="isLoadList"
            ref="list"
            :on-delete="onDeleteItem" />
        </div>
        <div class="lg:col-span-9 col-span-12 w-full overflow-y-scroll min-h-full">
          <div class="grid grid-cols-12 min-h-full">
            <div class="xl:col-span-4 col-span-12 mx-4 py-1 min-h-full">
              <div class="grid grid-cols-12 min-h-full">
                <div class="col-span-12 border border-zinc-600 min-h-[300px] my-2">
                  <div class="grid grid-cols-12 text-center w-full">
                    <div class="col-span-12 flex justify-center">
                      <h5>Изображения</h5>
                    </div>
                    <div class="col-span-12 flex justify-center">
                      <nuxt-img
                        v-if="valueModel.image"
                        :src="valueModel.image"
                        alt
                        class="w-[150px] h-[150px] border" />
                    </div>
                    <div class="col-span-12 justify-center">
                      <app-button class="btn-sm mt-2 btn-warning" @click="addImage">Добавить</app-button>
                    </div>
                    <div class="col-span-12 justify-center">
                      <div class="flex max-w-full overflow-x-auto h-full">
                        <template v-for="item in images" :key="item.path">
                          <div class="relative min-w-[100px] min-h-[100px] p-2 m-1">
                            <nuxt-img
                              :src="item.path"
                              :filename="item.path"
                              alt
                              width="100"
                              :class="[
                                'm-2',
                                'border',
                                'w-[100px]',
                                'h-[100px]',
                                { 'border-green-500 border-2': item.isActiveImage },
                              ]"
                              @click="selectImage" />
                            <button
                              class="absolute top-5 right-0 h-6"
                              @click="deleteImage(item)"
                              v-if="item.path !== valueModel.image">
                              <nuxt-icon name="mdi/mdi-delete" style="font-size: 1.2em" />
                            </button>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="xl:col-span-8 col-span-12 mx-4 py-1">
              <div class="grid grid-cols-12">
                <div class="xl:col-span-6 col-span-12 mx-4 py-1">
                  <app-input
                    v-model.trim="valueModel.name"
                    class="input-bordered w-full"
                    :class="{
                      'input-success': valueModel.name && valueModel.name.length > 2,
                      'input-error': !valueModel.name || valueModel.name.length < 3,
                    }"
                    label="Наименование" />
                </div>
                <div class="xl:col-span-6 col-span-12 mx-4 py-1">
                  <app-input
                    v-model.trim="valueModel.site"
                    class="input-bordered w-full"
                    :class="{
                      'input-success': valueModel.site && valueModel.site.length > 2,
                      'input-error': !valueModel.site || valueModel.site.length < 5,
                    }"
                    label="Сайт организации" />
                </div>
                <div class="col-span-12 mx-4">
                  <label class="label py-0 px-2">Короткое описание</label>
                  <textarea
                    v-model.trim="valueModel.short_description"
                    class="textarea textarea-bordered h-52 w-full my-2"
                    :class="{
                      'textarea-success': valueModel.short_description,
                      'textarea-error': !valueModel.short_description,
                    }"
                    placeholder="Короткое описание" />
                </div>
              </div>
            </div>

            <div class="col-span-12 mx-4">
              <label class="label py-0 px-2">Описание</label>
              <textarea
                v-model.trim="valueModel.description"
                class="textarea textarea-bordered h-60 w-full my-2"
                :class="{ 'textarea-success': valueModel.description, 'textarea-error': !valueModel.description }"
                placeholder="Описание" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-control-buttons
    :disabled-save="disabledSave"
    :on-save="onSave"
    :on-cancel="onCancel"
    :on-new="onNew"
    :disabled-cancel="disabledCancel" />
</template>

<script>
import appControlButton from '~/pages/sub/control_edit.vue' // подключение саб формы с кнопка ми управления
import mixinFunction from '~/mixins/globalMixins'
import multiselect from 'vue-multiselect' // компонент для мультивыбора из списка

export default {
  mixins: [mixinFunction],
  components: {
    'app-control-buttons': appControlButton,
    'app-multiselect': multiselect,
  },

  data() {
    return {
      list: [], // список организаций
      isLoadList: false, // статус загрузки данных
      listBanner: [],
      valueModel: {
        name: null, // значение поля "Наименование"
        description: null, // описание
        short_description: null, // короткое описание
        site: null,
        image: null, // имя файла изображения
      }, // данные страницы
      title: 'Организации',
      images: [], // изображения организации
      selectedItem: null, // выделенный элемент в списке
      disabledSave: true, // доступность кнопки "Сохранить"
      disabledCancel: true, // доступность кнопки "Отменить"
    }
  },

  async mounted() {
    const { getList } = this
    await getList()
  },

  methods: {
    /*
     * Удаление выбранного изображения
     * @function deleteImage
     * @param {Object} image - Объект изображения
     */
    async deleteImage(image) {
      const { $showConfirm, processResponse, valueModel, images } = this
      const optionsConfirm = {
        message: 'Удалить выбранное изображение?',
      } // опции формы подтверждения
      const confirm = await $showConfirm(optionsConfirm) // открытие окна подтверждение
      if (confirm) {
        const paramsQuery = { method: 'POST', body: { id_organization: valueModel.id, path: image.path } } // параметры запроса
        const response = await useFetch('/api/organizations/delete-image', paramsQuery) // отправка запроса для удаления изображения
        if (processResponse(response)) {
          const index = images.findIndex(el => el.path === image.path) // получение индекса изображения в массиве
          this.images.splice(index, 1) // удаление из массива элемента
        }
      }
    },

    /*
     * Выбор изображения
     * @function selectImage
     */
    selectImage(event) {
      const filename = event.target.attributes.filename.nodeValue // получение имени файла
      let index
      if (filename) index = this.images.findIndex(el => el.path === filename) // Получение индекса выделенного изображения
      if (index >= 0) {
        this.images.forEach(el => (el.isActiveImage = false)) // сброс активности для всех изображений
        this.images[index].isActiveImage = true // установка активности для выбранного изображения
        this.valueModel.image = this.images[index].path // установка изображения для текущей организации
      }
    },

    /*
     * Добавление изображения
     * @function addImage
     */
    async addImage() {
      const { $showModal, valueModel } = this
      const body = await $showModal('upload-file', {
        modalTitle: 'Загрузка изображения',
        width: 'w-[600px]',
        url: `/api/organizations/load-image?id=${valueModel.id}`,
        name: valueModel.id,
      })
      this.images.push({ path: body.path })
    },
    /*
     * Сохранение данных
     * @function onSave
     */
    async onSave() {
      const { $showConfirm, cloneObject, capitalize, selectItem, processResponse } = this
      const optionsConfirm = {
        message: 'Сохранить изменения?',
      }
      const confirm = await $showConfirm(optionsConfirm) // открытие окна подтверждение
      if (confirm) {
        const index = this.list.findIndex(el => el.id == this.valueModel.id) // получение идентификатора выделенного элемента
        const body = cloneObject(this.valueModel)
        body.name = capitalize(body.name)
        body.description = capitalize(body.description)
        body.short_description = capitalize(body.short_description)
        const paramsQuery = { method: 'POST', body } // параметры запроса
        const response = await useFetch('/api/organizations/edit', paramsQuery) // получение данных списка
        if (processResponse(response)) {
          this.list[index] = cloneObject(this.valueModel) // Изменение объекта выделенного элемента в списка
          selectItem(index)
        }
      }
    },

    /*
     * Получение списка организаций
     * @function getList
     */
    async getList() {
      const { processingListResponse } = this
      const { pending, data: list, error } = await useFetch('/api/organizations/all') // получение данных списка
      if (processingListResponse(error)) {
        this.list = list.value[0] // установка списка
        this.isLoadList = !!pending // установка статуса загрузки
      }
    },

    /*
     * Создание новой организации
     * @function onNew
     */
    async onNew() {
      const { $showModal, list, capitalize, selectItem, processResponse } = this
      const body = await $showModal('modal_name', { modalTitle: 'Создание новой организации' })
      if (body) {
        body.name = capitalize(body.name)
        const paramsQuery = { method: 'PUT', body } // параметры запроса
        const response = await useFetch('/api/organizations/add', paramsQuery) // получение данных списка
        if (processResponse(response)) {
          this.list.push(response.data.value.data)
          const index = list.findIndex(el => el.id === response.data.value.data.id)
          selectItem(index) // выбор элемента списка
        }
      }
    },
    /*
     * Удаление типа документа
     * @function onDeleteItem
     * @param {Object} item - элемент
     */
    async onDeleteItem(item) {
      const { list, $showConfirm, selectItem, processResponse } = this
      const options = {
        message: 'Удалить запись?',
      } // опции формы подтверждения
      const confirm = await $showConfirm(options) // открытие окна подтверждение
      if (confirm) {
        const index = list.findIndex(el => el.id === item.id) // получение индекса элемента
        const paramsQuery = { method: 'DELETE', body: list[index].id } // параметры запроса
        const response = await useFetch('/api/organizations/del', paramsQuery) // получение данных списка
        if (processResponse(response)) {
          list.splice(index, 1) // удаление элемента из списка
          if (list.length) selectItem()
          else this.valueModel.name = null
        }
      }
    },

    /*
     * Отмена изменения данных
     * @function onCancel
     */
    async onCancel() {
      const { $showConfirm, list, valueModel } = this
      const optionsConfirm = {
        message: 'Есть не сохраненные данные, отменить изменения?',
      }
      const confirm = await $showConfirm(optionsConfirm) // открытие окна подтверждение
      if (confirm) {
        // если нажата кнока "Да"
        const index = list.findIndex(el => el.id === valueModel.id) // получение индекса элемента в списке
        const item = this.cloneObject(list[index]) // клонирование элемента в объектную модель
        delete item.isActive // удаление свойства
        this.valueModel = item // установка значения данных модели
      }
    },

    /*
     * Выделение элемента списка
     * @function selectItem
     * @param {Number} index Индекс выделяемого элемента
     */
    selectItem(index) {
      const { $nextTick, list, $refs } = this
      if (list.length)
        $nextTick(() => {
          $refs.list.$el.querySelectorAll('li')[index ? index : 0].click() // эмуляция клика по элементу
        })
    },

    /*
     * Валидация формы
     * @function validateForm
     * @param {Object} data - Данные формы
     */
    validateForm(data) {
      const valid = {
        name: false, // валидация поля наименования
        description: false, // валидация полного описания
        shortDescription: false, // валидация короткого описания
        site: null, // валидация сайта организации
      }
      valid.name = data.name && data.name.length && data.name.length > 3 ? true : false // валидация поля "Наименование"
      valid.description = data.description && data.description.length ? true : false // Валидация поля "Полное описание"
      valid.shortDescription = data.short_description && data.short_description.length ? true : false // Валидация поля "Короткое описание"
      valid.site = data.site && data.site.length ? true : false

      const required = valid.name && valid.site && valid.description && valid.shortDescription // валидация обязательных полей

      /* Проверка ввода поля "Наименование" */
      if (data && data.name) this.valueModel.name = data.name.replace(/\s\s+/g, ' ') // удаление двойных пробелов из поля "Наименование"

      if (data && data.short_description)
        this.valueModel.short_description = data.short_description.replace(/\s\s+/g, ' ') // удаление двойных пробелов из поля "Короткое описание"

      if (data && data.description) this.valueModel.description = data.description.replace(/\s\s+/g, ' ') // удаление двойных пробелов из поля "Полное описание"

      if (!required) return true
      else return required ? false : true
    },
  },

  watch: {
    /*
     * Отслеживание выбора организации в списке
     */
    selectedItem: {
      handler(newValue) {
        const { cloneObject } = this
        this.valueModel = cloneObject(newValue) // клонирование выбранного объекта
      },
      deep: true,
    },
    /*
     * Наблюдение за статусом загрузкой списка
     * @function isLoadList
     */
    isLoadList() {
      const { selectItem } = this
      selectItem()
    },
    /*
     * Отслеживание изменений данных формы
     */
    valueModel: {
      handler(newValue) {
        const { validateForm, withObject, selectedItem } = this
        this.images = []
        this.disabledSave = validateForm(newValue) || withObject(newValue, selectedItem) // установка активности кнопки "Сохранить"
        this.disabledCancel = withObject(newValue, selectedItem) // установка активности кнопки "Отменить"
        if (newValue.images) {
          const arr = Object.values(newValue.images) // преобразование значений объекта в массив
          this.images = arr.map(el => {
            return { path: el }
          }) // формирование массива с изображениями
          const index = this.images.findIndex(el => el.path === newValue.image) // Поиск индекса изображения организации
          if (index >= 0) this.images[index].isActiveImage = true // установка активности для изображения из списка
        }
      },
      deep: true,
    },
  },
}
</script>
