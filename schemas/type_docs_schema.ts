/** 
** Описание таблицы guide.type_docs
*/

export const type_docs_schema = {
  id: {
    type: Number,
    required: true,
    autoInrement: true,
    name: 'Идентификатор'
  },
  name: {
    type: String,
    require: true,
    name: 'Наименование'
  }
}