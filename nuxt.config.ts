// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
import {getWhiteList} from './scripts/whitelist/generator-whitelist'
import * as fs from 'fs' // модуль для работы с файловой системой
let whitelist
(async () => {
  whitelist = getWhiteList() // формирование белого списка классов
})()

// const whitelist = fs.readFileSync('./scripts/whitelist/whitelist.txt').toString() // чтение файла

export default defineNuxtConfig({
  ssr: false,
  css: ['assets/css/main.css'],
  build: {

  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ['nuxt-purgecss'],
  purgecss: {
    safelist: ['safe'],
    content:[
      './components/**/**/**/*.vue',
      './components/**/**/*.vue',
      './components/**/*.vue',
      './components/app/*.vue',
      './layouts/**/*.vue',
      './layouts/*.vue',
      './pages/**/*.vue',
      './pages/**/**/*.vue',
      './pages/*.vue',
    ],
    whitelist: whitelist.split(',')
  }
})