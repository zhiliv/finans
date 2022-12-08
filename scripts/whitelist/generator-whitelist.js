/* eslint-disable prefer-const */
import * as fs from 'fs'
import { globby } from 'globby'
import {listClass} from './list-class.js' // классы для проверки
import {requiredClass} from './required-class.js' // обязательные классы, которые не будут удаляться
const listPath = ['./pages/*.vue', './pages/modal/**/*.vue', './pages/**/*.vue', './layouts/*.vue'] // список папок для проверки

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
      // await fs.writeFileSync('./scripts/whitelist/whitelist.txt', whitelist.toString())
      console.log('√ Белый список классов сформирован')
      return whitelist

    }
  }
}
