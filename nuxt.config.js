// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
import {getWhiteList} from './scripts/whitelist/generator-whitelist.mjs'
import * as fs from 'fs' // модуль для работы с файловой системой
/* getWhiteList() // формирование белого списка классов
import whitelist from './scripts/whitelist/whitelist.json'
console.log('🚀 -> whitelist', whitelist) */



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
    // whitelist: fs.readFileSync('./scripts/whitelist/whitelist.txt').toString().split(',')
  }
})