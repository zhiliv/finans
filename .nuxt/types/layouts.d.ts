import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "clean" | "default"
declare module "D:/Projects/finans/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}