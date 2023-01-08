export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/css/main.css', '@/assets/css/_variables.css'],
  build: {

  },
  vSelect: {
    component: {
      as: 'AppSelect',
      globalRegister: true,
      includeCss: true
    }
    // extend(vSelect, vueApp) => void | Promise<void>
  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ['nuxt-purgecss', '@nuxtjs/critters', 'nuxt-icon', '@whoj/nuxt3-vue-select'],
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
/*   vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_variables.css";'
        }
      }
    },
  }, */
})