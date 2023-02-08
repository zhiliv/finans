// import whitelist from './modules/whitelist/result-whitelist.json'
export default defineNuxtConfig({
  runtimeConfig: {
    database: {
      username: 'postgres',
      password: 1,
      host: '127.0.0.1',
      port: 5432,
      database: 'finance',
    },
  },
  app: {
    head: {
      bodyAttrs: {
        class: '',
      },
    },
  },
  ssr: false,
  css: ['@/assets/css/main.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    target: 'esnext',
  },
  vSelect: {
    component: {
      as: 'AppSelect',
      globalRegister: true,
      includeCss: true,
    },
    // extend(vSelect, vueApp) => void | Promise<void>
  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ['nuxt-purgecss', '@nuxtjs/critters', '@whoj/nuxt3-vue-select', '@nuxtjs/tailwindcss'],
  purgecss: {
    safelist: ['safe'],
    content: [
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
