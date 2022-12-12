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