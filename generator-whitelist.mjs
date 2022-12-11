/* eslint-disable prefer-const */
import * as fs from 'fs'
import { globby } from 'globby'
import { parse } from 'node-html-parser';
import {listClass} from './list-class.mjs' // классы для проверки
import {requiredClass} from './required-class.mjs' // обязательные классы, которые не будут удаляться
const listPath = ['./pages/*.vue', './pages/**/*.vue', './pages/**/**/*.vue', './pages/modal/**/*.vue', './pages/modal/**/**/*.vue', './layouts/*.vue'] // список папок для проверки

/*
* Получение всех адресов фалов для парсинга
* @async
* @function getFileAdress
* @return {Array} Список адресов файлов
*/
const getFileAdress = async () => {
  const list = [] // результат
  for await (const namePath of listPath) { // ассинхронный обход списка каталогов
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
const getDataPage = async (filePath) => {
  let data = await fs.readFileSync(filePath).toString() // получение содержимого файла в текстовом виде
  if(data) data = data.replace(/\r\n/g, '') // удаление лишних символов
  return  data.match(/(?<=\<template\>)(\s*.*\s*)(?=\<\/template\>)/) // получение html содержимого страницы
}


export const getWhiteList = async () => {
let schema = [] // схема с тегами и атрибутами
/*
* Получение дочерних элементов в теге
* @function getChildren
* @param {Array} list - Список дочерних элементов
*/
const getChildren = async (list) => {
  if(list && list.length){
    list.forEach((item, index) => {
      if(item.rawTagName) {
        const obj = {tag: item.rawTagName, attrs: item.attrs} // формирование объекта тега
        schema.push(obj) // добавление тега с аттрибутами в схему
        getChildren(item.childNodes)  // получение дочерних элементов
      }
    })
  }
}
  const whitelist = [...requiredClass] // добавление обязательны классов
  const listFiles = await getFileAdress() // список файлов для парсинга
  for await (const filePath of listFiles){
    const dataFile = await getDataPage(filePath) // получение содержимого файла
    const parseFile = parse(dataFile) // пасинг данных файла
    if(parseFile && parseFile.childNodes && parseFile.childNodes.length){  // если есть дочерние элементы
      const childNodes = parseFile.childNodes.slice(parseFile.childNodes.length / 2) // сокращение массива, так как записи дублируются
      getChildren(childNodes) // получение тегов и аттрибутов
    }
    schema = schema.filter(el => Object.keys(el.attrs).length) // фильтрация тегов с пустыми аттрибутами
    console.log('schema', schema)
  }
}

getWhiteList()