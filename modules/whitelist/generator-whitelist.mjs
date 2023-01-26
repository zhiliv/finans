/* eslint-disable prefer-const */
import * as fs from 'fs'
import { globby } from 'globby'
import { parse } from 'node-html-parser'
// import {requiredClass} from './required-class.json' // обязательные классы, которые не будут удаляться
const listPath = [
  './pages/*.vue',
  './pages/**/*.vue',
  './pages/**/**/*.vue',
  './pages/modals/**/*.vue',
  './pages/modals/**/**/*.vue',
  './pages/modals/*.vue',
  './pages/guides/*.vue',
  './pages/sub/*.vue',
  './layouts/*.vue',
] // список папок для проверки

const noFindAttrs = [] // массив для хранения ненайденных аттрибутов элементов для проверки

const dataRequiredClass = fs.readFileSync('./modules/whitelist/required-class.json').toString() // получение списка обязательных классов
const requiredClass = JSON.parse(dataRequiredClass) // преобразование текста в json

const dataShemasComponents = fs.readFileSync('./modules/whitelist/schemas-components.json').toString() // чтение схемы классов
const shemasComponents = JSON.parse(dataShemasComponents) // преобразование в json

/*
 * Получение всех адресов фалов для парсинга
 * @async
 * @function getFileAdress
 * @return {Array} Список адресов файлов
 */
const getFileAdress = async () => {
  const list = [] // результат
  for await (const namePath of listPath) {
    // ассинхронный обход списка каталогов
    const paths = await globby(namePath) // получение всех файлов vue в папке
    list.push(...paths) // добавление адресов в результативный массив
  }
  const result = list.length ? [...new Set(list)] : [] // формирование результата списка
  return result
}

/*
 * Получение содержимого страницы
 * @async
 * @function getDataPage
 * @param {String} filePath - путь к файлу
 * @return {String} Содержимое тега template
 */
const getDataPage = async filePath => {
  let data = await fs.readFileSync(filePath).toString() // получение содержимого файла в текстовом виде
  if (data) data = data.replace(/\r\n/g, '') // удаление лишних символов
  return data.match(/(?<=\<template\>)(\s*.*\s*)(?=\<\/template\>)/) // получение html содержимого страницы
}

export const getWhiteList = async () => {
  let schema = [] // схема с тегами и атрибутами
  /*
   * Получение дочерних элементов в теге
   * @function getChildren
   * @param {Array} list - Список дочерних элементов
   */
  const getChildren = async list => {
    if (list && list.length) {
      list.forEach((item, index) => {
        if (item.rawTagName) {
          const obj = { tag: item.rawTagName, attrs: item.attrs } // формирование объекта тега
          schema.push(obj) // добавление тега с аттрибутами в схему
          getChildren(item.childNodes) // получение дочерних элементов
        }
      })
    }
  }
  const whitelist = [...requiredClass] // добавление обязательны классов
  const listFiles = await getFileAdress() // список файлов для парсинга
  for await (const filePath of listFiles) {
    const dataFile = await getDataPage(filePath) // получение содержимого файла
    const parseFile = parse(dataFile) // пасинг данных файла
    if (parseFile && parseFile.childNodes && parseFile.childNodes.length) {
      // если есть дочерние элементы
      const childNodes = parseFile.childNodes.slice(parseFile.childNodes.length / 2) // сокращение массива, так как записи дублируются
      getChildren(childNodes) // получение тегов и аттрибутов
    }
    schema = schema.filter(el => Object.keys(el.attrs).length) // фильтрация тегов с пустыми аттрибутами
    // fs.writeFileSync('./modules/whitelist/schema-test.json', JSON.stringify(schema))
    schema.forEach(el => {
      const findSchema = shemasComponents.find(fnd => fnd.tag === el.tag) // поиск элемента
      if (el && el.attrs) { // проверка что у распарсеннго элемента есть свойство attrs
        for (const nameAttr in el.attrs) { // обход всех значений объекта
          if (nameAttr !== 'class') {  // проверка на лишние аттрибуты
            if(findSchema && findSchema.attrs){
              const attr = findSchema.attrs.find(attrEl => attrEl.name === nameAttr) // поиск аттрибута в теге схемы классов компонента
              if(attr && attr.values) {
                const findValue = attr.values.find(elValue => elValue.value === el.attrs[nameAttr]) // поиск значений аттрибута
                if(findValue) {

                  const countClass = whitelist.findIndex(elRequire => elRequire === findValue.class)
                  console.log('🚀 -> forawait -> countClass', countClass)
                  if(countClass === -1){
                    console.log(findValue.class)
                    whitelist.push(findValue.class)
                  }
                }
                else noFindAttrs.push({tag: el.tag, nameAttr, value: el.attrs[nameAttr] })
              }
            }
          }
        }
      }
    })
  }
  fs.writeFileSync('./modules/whitelist/not-find-attrs.json', JSON.stringify(noFindAttrs))
  fs.writeFileSync('./modules/whitelist/result-whitelist.json', JSON.stringify(whitelist))
}

getWhiteList()
