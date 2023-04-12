// import whitelist from './modules/whitelist/result-whitelist.json'
const path = require('path')

export default defineNuxtConfig({
  env: {
    tokenLeads: 'c8e2d508767bd48d929b8d63641eaf80',
  },

  ssr: process.env.NODE_ENV !== 'development',
  runtimeConfig: {
    database: {
      username: 'postgres',
      password: '1',
      host: '127.0.0.1',
      port: 5432,
      database: 'finance',
    },
    token_leads: 'c8e2d508767bd48d929b8d63641eaf80',
    secret_key: 'yOzPacWqItuzr0sg5AVMG7dsIfCaoAj0C6Z6GFt5lrKLLxHWl3jlAfWkGlWhSgFz13i50S2lVYTwB3qC',
    saltRounds: 11,
    password_admin_start: 'admin',
  },
  app: {
    head: {
      bodyAttrs: {
        class: '',
      },
    },
  },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
      autoprefixer: {},
    },
  },

  nitro: {
    compressPublicAssets: true,
    plugins: ['~/server/index.js'],
  },
  modules: [
    '@sidebase/nuxt-session',
    '@nuxt/image-edge',
    'nuxt-icons',
    '@nuxt-modules/compression',
    [
      'nuxt-purgecss',
      {
        enabled: true,
        safelist: [/^h-/, /^w-/, /^lg:h-/, /^min-h-/, /^min-w-/, /^max-h-/, /^maw-w-/, /^xl:w-/],
      },
    ],
  ],

  image: {
    dir: 'public/img',
  },

  session: {
    isEnabled: true,
    session: {
      expiryInSeconds: 30*10,
      cookieSecure: true,
    },
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
