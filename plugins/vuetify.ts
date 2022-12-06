import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: true,
          colors: {
            primary: colors.amber.darken1
          }
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})