export default defineNuxtConfig({
  ssr: true,
  css: ['@/assets/css/main.css', '@/assets/css/_variables.css'],
  build: {

  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ['nuxt-purgecss', '@nuxtjs/critters', 'nuxt-icons'],
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