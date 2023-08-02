import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxtIcons"]?: typeof import("nuxt-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["purgecss"]?: typeof import("nuxt-purgecss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/image-edge", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-icons", Exclude<NuxtConfig["nuxtIcons"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-purgecss", Exclude<NuxtConfig["purgecss"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   database: {
      username: string,

      password: string,

      host: string,

      port: number,

      database: string,
   },

   token_leads: string,

   secret_key: string,

   saltRounds: number,

   password_admin_start: string,

   sessionOptions: {
      maxAge: number,

      httpOnly: boolean,

      path: string,

      sameSite: boolean,

      secure: boolean,
   },

   notAuth: boolean,
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }