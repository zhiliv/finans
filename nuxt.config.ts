// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'], // vuetify ships precompiled css, no need to import sass
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
      ssr: {
        noExternal: ['vuetify'], // add the vuetify vite plugin
    },
    },
    build: {
      transpile: ['vuetify'],
    },
    nitro: {
      compressPublicAssets: true,
    },
    purgecss: {
      enabled: true, // Always enable purgecss
      keyframes: true,
      paths: [
        './layouts/**/*.vue',
        './layouts/*.vue',
        './pages/**/*.vue',
        './pages/**/**/*.vue',
        './pages/*.vue',
        './node_modules/vuetify/dist/*.',
        './node_modules/vuetify/dist/*.css',
        './node_modules/vuetify/src/**/*.ts',
        './node_modules/@mdi/fonts/*',
      ],
      styleExtensions: ['.css'],
    // whitelist: ['body', 'html', 'nuxt-progress', ''],

    whitelist: ['v-application', 'v-application--wrap','layout','row','col', 'v-card'],
    whitelistPatterns: [
      /^v-((?!application).)*$/,
      /^theme--*/,
      /.*-transition/,
      /^justify-*/,
      /^p*-[0-9]/,
      /^m*-[0-9]/,
      /^mx-auto/,
      /^text--*/,
      /--text$/,
      /^row-*/,
      /^col-*/,
      /leaflet/,
      /marker/
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/],
      extractors: [
        {
          extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
          extensions: ['html', 'vue', 'js'],
        },
      ],
    },
})