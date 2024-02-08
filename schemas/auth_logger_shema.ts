import { SchemaDB } from '~/types/SchemaDB'

export const auth_logger_schema: SchemaDB = {
  schema: 'controls',
  table: 'auth_logger',
  fullPath: 'controls.auth_logger',
  short: 'alogger',
  columns:{
    id: {
      type: 'Number',
      required: true,
      autoIncrement: true,
      name: 'Идентификатор'
    },
    user_id: {
      type: 'Number',
      required: true,
      name: 'Идентификатор пользователя'
    },
    date_request: {
      type: 'Date',
      required: true,
      name: 'Дата/Время запроса авторизации'
    },
    date_auth: {
      type: 'Date',
      name: 'Дата последней авторизации'
    },
    status: {
      type: 'Boolean',
      name: 'Статус авторизации'
    },
    token: {
      type: 'String',
      name: 'Токен авторизации'
    }
  }
}