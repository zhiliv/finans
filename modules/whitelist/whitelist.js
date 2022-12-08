import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
/*   hooks: {
    'kit:compatibility': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('kit:compatibility')
    },

    'ready': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('ready')
    },

    'close': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('close')
    },

    'app:resolve': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('app:resolve')
    },

    'app:templates': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('app:templates')
    },

    'modules:before': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('modules:before')
    },

    'modules:done': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('modules:done')
    },

    'app:templatesGenerated': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('app:templatesGenerated')
    },

    'build:before': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('build:before')
    },

    'build:done': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('build:done')
    },

    'build:manifest': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('build:manifest')
    },

    'builder:generateApp': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('builder:generateApp')
    },

    'builder:watch': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('builder:watch')
    },

    'pages:extend': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('pages:extend')
    },

    'server:devHandler': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('server:devHandler')
    },

    'imports:sources': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('imports:sources')
    },

    'imports:extend': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('imports:extend')
    },

    'imports:dirs': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('imports:dirs')
    },

    'components:dirs': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('components:dirs')
    },

'components:extend': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('components:extend')
    },

    'nitro:config': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('nitro:config')
    },

    'nitro:init': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('nitro:init')
    },

    'nitro:build:before': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('nitro:build:before')
    },

    'prerender:routes': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('prerender:routes')
    },

    'nitro:build:beforevite:extendConfig': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('vite:extendConfig')
    },

    'vite:serverCreated': (nuxt) => {
      if(nuxt && nuxt.options && nuxt.options.postcss && nuxt.options.postcss.plugins) console.log('vite:serverCreated')
    },

    'ready': (nuxt) => {
      console.log('🚀 -> nuxt', nuxt.options.postcss.plugins["@fullhuman/postcss-purgecss"])
      // console.log('hook')
      nuxt.options.purgecss.whitelist = ["html","body","row","container","container-fluid","modals-container","vm--container","vm--overlay","vm--top-right-slot","vm--modal","toast-primary","toast-info","toast-secondary","toast-success","toast-warning","toast-danger","toast-light","toast-dark","btn-sm"]
    }
  }, */
  defaults(nuxt){
    nuxt.options.postcss.plugins["@fullhuman/postcss-purgecss"].whitelist = ["html","body","row","container","container-fluid","modals-container","vm--container","vm--overlay","vm--top-right-slot","vm--modal","toast-primary","toast-info","toast-secondary","toast-success","toast-warning","toast-danger","toast-light","toast-dark","btn-sm"]
  },
  setup (options, nuxt){
    console.log('setup')
    /* nuxt.options.purgecss.whitelist = ["html","body","row","container","container-fluid","modals-container","vm--container","vm--overlay","vm--top-right-slot","vm--modal","toast-primary","toast-info","toast-secondary","toast-success","toast-warning","toast-danger","toast-light","toast-dark","btn-sm"] */
    // console.log('🚀 -> setup -> nuxt.options.purgecss', nuxt.options.purgecss)
    // console.log('🚀 -> setup -> nuxt', nuxt)
  }
})

/* export default function whitelist (moduleOptions) {
  return ["html","body","row","container","container-fluid","modals-container","vm--container","vm--overlay","vm--top-right-slot","vm--modal","toast-primary","toast-info","toast-secondary","toast-success","toast-warning","toast-danger","toast-light","toast-dark","btn-sm"]
} */