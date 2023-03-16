// import whitelist from './modules/whitelist/result-whitelist.json'
const path = require('path')
const {
  constants: {
    BROTLI_MODE_TEXT,
    BROTLI_PARAM_MODE,
    BROTLI_PARAM_QUALITY
  }
} = require('zlib')
export default defineNuxtConfig({
  env: {
    tokenLeads: 'c8e2d508767bd48d929b8d63641eaf80',
  },
  mode: 'spa',
  ssr: true,
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
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth', '@nuxt/image-edge',     ['@nuxt-modules/compression', {
    algorithm: 'brotliCompress', filter: /\.(mjs|json|)$/i, threshold: 256, compressionOptions: { chunkSize: 4096,
      parameters: {
        [BROTLI_PARAM_MODE]: BROTLI_MODE_TEXT
      }}
  }]],
  auth: {
    origin: 'http://localhost:3000',
    enableGlobalAppMiddleware: true,
    option: {
      session: {
        // Choose how you want to save the user session.
        // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
        // If you use an `adapter` however, we default it to `"database"` instead.
        // You can still force a JWT session by explicitly defining `"jwt"`.
        // When using `"database"`, the session cookie will only contain a `sessionToken` value,
        // which is used to look up the session in the database.
        strategy: 'database',

        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 60, // 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        updateAge: 60, // 24 hours

        // The session token is usually either a random UUID or string, however if you
        // need a more customized session token string, you can define your own generate function.
        generateSessionToken: () => {
          return randomUUID?.() ?? randomBytes(32).toString('hex')
        },
      },
    },
  },

  image: {
    dir: 'public/img',
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
