export default defineNuxtConfig({
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    title: 'CMS-ecommerce',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  ssr: true,
  css: ['@/assets/scss/main.scss'],
  build: {

  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ['nuxt-purgecss', '@nuxtjs/critters'],
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
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";'
        }
      }
    },
  },
})