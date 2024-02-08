/** 
** Описание схемы таблицы prod.organizations
** Пользователи
*/
import { SchemaDB } from '~/types/SchemaDB'


export const organizations_schema: SchemaDB = {
  schema: 'prod',
  table: 'organizations',
  fullPath: `prod.organizations`,
  short: 'org',
  columns: {
    id: {
      type: 'Number',
      required: true,
      autoInrement: true,
      title: 'Идентификатор'
    },
    name: {
      type: 'String',
      title: 'Наименование организации'
    },
    information: {
      title: 'Информация об организации',
      type: 'JSONB',
      fields: {
        INN: {
          title: 'ИНН',
          type: 'Number'
        },
        OGRN: {
          title: 'ОГРН',
          type: 'Number'
        },
        site: {
          title: 'Сайт',
          type: 'String'
        },
        phones: {
          title: 'Номера телефонов',
          type: 'Array'
        },
        Ur_name: {
          title: 'Юридическое название организации',
          type: 'String'
        },
        Ur_address: {
          title: 'Юридический адрес',
          type: 'String'
        },
        description: {
          title: 'Описание организации',
          type: 'String'
        },
        short_description: {
          title: 'Короткое описание организации',
          type: 'String'
        }
      }
    },
    images: {
      type: 'JSONB',
      isArray: true,
      title: 'Изображения',
      columns: {
        id: {
          type: 'UUID',
          title: 'Идентификатор изображения'
        },
        path: {
          title: 'Путь к файлу',
          type: 'String'
        },
        label: {
          title: 'Описание изображения',
          type: 'String'
        },
        fileName: {
          title: 'Имя файла',
          type: 'String'
        },
        isActive: {
          title: 'Признак главного изображения',
          type: 'Boolean'
        }
      }
    }
  }
}