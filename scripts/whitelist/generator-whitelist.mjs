/* eslint-disable prefer-const */
import * as fs from 'fs'
import { globby } from 'globby'
import {listClass} from './list-class.mjs' // классы для проверки
import {requiredClass} from './required-class.mjs' // обязательные классы, которые не будут удаляться
const listPath = ['./pages/*.vue', './pages/**/*.vue', './pages/**/**/*.vue', './pages/modal/**/*.vue', './pages/modal/**/**/*.vue', './layouts/*.vue'] // список папок для проверки

export const getWhiteList = async () => {
  let whitelist = [...requiredClass] // добавление обязательны классов
  let i = 0 // переменная для счетчика
  for await (const namePath of listPath) { // ассинхронный обход списка каталогов
    // обход указанных папок
    const paths = await globby(namePath) // получение всех файлов vue в папке
    for await (const fileName of paths) {
      const data = await fs.readFileSync(fileName).toString() // чтение vue файла
      console.log('🚀 -> forawait -> data', data)
      for (let key in listClass) {
        let getData = data.match(/<template>(.*?)<\/template>/g)
        console.log('🚀 -> forawait -> getData', getData)
        /* if (listClass[key].test(data) && !whitelist.find(wl => wl === key)) { // если в файле содержится проверяемый класс
          whitelist.push(key) // добавление в массив класса белого списка
        } */
      }
    }

    i++
    if (i === listPath.length) {
      // await fs.writeFileSync('./scripts/whitelist/whitelist.json', JSON.stringify(whitelist))
      console.log('√ Белый список классов сформирован')
    }
  }
}

getWhiteList()