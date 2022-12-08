/* eslint-disable prefer-const */
import * as fs from 'fs'
import { globby } from 'globby'
import {listClass} from './list-class.mjs' // классы для проверки
import {requiredClass} from './required-class.mjs' // обязательные классы, которые не будут удаляться
const listPath = ['./pages/*.vue', './pages/**/*.vue', './pages/**/**/*.vue', './pages/modal/**/*.vue', './pages/modal/**/**/*.vue', './layouts/*.vue'] // список папок для проверки

export const getWhiteList = async () => {
  let whitelist = [...requiredClass]
  let i = 0
  for await (const namePath of listPath) {
    // обход указанных папок
    const paths = await globby(namePath) // получение всех файлов vue в папке
    for await (const fileName of paths) {
      const data = await fs.readFileSync(fileName).toString() // чтение vue файла
      for (let key in listClass) {
        if (listClass[key].test(data) && !whitelist.find(wl => wl === key)) { // если в файле содержится проверяемый класс
          whitelist.push(key) // добавление в массив класса белого списка
        }
      }
    }

    i++
    if (i === listPath.length) {
      await fs.writeFileSync('./scripts/whitelist/whitelist.json', JSON.stringify(whitelist))
      console.log('√ Белый список классов сформирован')
    }
  }
}

getWhiteList()