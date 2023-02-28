// import whitelist from './modules/whitelist/result-whitelist.json'
const path = require('path')
export default defineNuxtConfig({
  env: {
    tokenLeads: 'c8e2d508767bd48d929b8d63641eaf80',
  },
  mode: 'spa',
  tailwindcss: {
    jit: true,
  },
  runtimeConfig: {
    database: {
      username: 'postgres',
      password: 1,
      host: '127.0.0.1',
      port: 5432,
      database: 'finance',
    },
    token_leads: 'c8e2d508767bd48d929b8d63641eaf80'
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
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {},
      },
    },
    target: 'esnext',
  },
  preset: {
    stage: 1, // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        tailwindConfig: {
          test: /tailwind\.config/,
          chunks: 'all',
          priority: 10,
          name: true,
        },
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
    plugins: ['~/server/index.js'],
  },
  modules: ['@nuxtjs/tailwindcss'],

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
