
/** 
** Описание сущности файла загрузки для организации\
* @type File
* @param {NUmber} id - Идентификатор
* @param {Number} id_organization - Идентификатор органищации
* @param {String} path - Путь к файлу 
* @param {String} label - Описание файла
* @param {Number} lastModified - Время модификации в секундах
* @param {Date} lastModifiedDate - Дата модификации файла
* @param {String} name - Имя файла
* @param {Number} size - Размер файла
* @param {String} type - Тип файла
* @param {String} webkitRelativePath - Папка для загрузки
* @param {String} dataFile - Содержимое файла
* @param {Boolean} isNew - Признак нового файла
* @param {Boolean} isDel - Признак удаления файла
*/
export type File = {
  id?: Number
  id_organization?: number
  path?: string
  label: string
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: Number
  type: string
  webkitRelativePath?: string
  dataFile: string
  isNew?: boolean
  isDel?: boolean
  fileName: string | null
}

/**
** Описание сущности "Организация
* @type organization
* @param {String} name - Наименование
* @param {String} description - Описание
* @param {String} short_description - Короткое описание
* @param {Number} id - Идентификатор
* @param {File[]} images - Список изображений
* @param {String } table - Таблица
*/
export type Organization = {
  name: string
  description: string
  short_description: string
  id: number
  images: File[]
  table: string
}
