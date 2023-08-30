// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/auth/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/[...]').default>>>>
    }
    '/api/categories/add': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/categories/add.post').default>>>>
    }
    '/api/categories/all': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/categories/all.get').default>>>>
    }
    '/api/categories/count': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/categories/count.get').default>>>>
    }
    '/api/categories/del': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/categories/del.delete').default>>>>
    }
    '/api/categories/edit': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/categories/edit.post').default>>>>
    }
    '/api/categories/get-leads': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/categories/get-leads.get').default>>>>
    }
    '/api/cpa/add': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/cpa/add.post').default>>>>
    }
    '/api/cpa/all': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/cpa/all.get').default>>>>
    }
    '/api/cpa/del': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/cpa/del.delete').default>>>>
    }
    '/api/cpa/edit': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/cpa/edit.post').default>>>>
    }
    '/api/list': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/list').default>>>>
    }
    '/api/method-get-money/add': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/method-get-money/add.post').default>>>>
    }
    '/api/method-get-money/all': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/method-get-money/all.get').default>>>>
    }
    '/api/method-get-money/del': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/method-get-money/del.delete').default>>>>
    }
    '/api/method-get-money/edit': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/method-get-money/edit.post').default>>>>
    }
    '/api/method-get-money/get-leads': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/method-get-money/get-leads.get').default>>>>
    }
    '/api/offers/add': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/offers/add.post').default>>>>
    }
    '/api/offers/all': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/offers/all.get').default>>>>
    }
    '/api/offers/del': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/offers/del.delete').default>>>>
    }
    '/api/offers/edit': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/offers/edit.post').default>>>>
    }
    '/api/offers/load-image': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/offers/load-image.post').default>>>>
    }
    '/api/organizations/add': {
      'put': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/organizations/add.put').default>>>>
    }
    '/api/organizations/all': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/organizations/all.get').default>>>>
    }
    '/api/organizations/del': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/organizations/del.delete').default>>>>
    }
    '/api/organizations/delete-image': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/organizations/delete-image.post').default>>>>
    }
    '/api/organizations/edit': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/organizations/edit.post').default>>>>
    }
    '/api/organizations/load-image': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/organizations/load-image.post').default>>>>
    }
    '/api/session/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/session/[...]').default>>>>
    }
    '/api/type-docs/add': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/type-docs/add.post').default>>>>
    }
    '/api/type-docs/all': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/type-docs/all.get').default>>>>
    }
    '/api/type-docs/del': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/type-docs/del.delete').default>>>>
    }
    '/api/type-docs/edit': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/type-docs/edit.post').default>>>>
    }
    '/api/type-profit/add': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/type-profit/add.post').default>>>>
    }
    '/api/type-profit/all': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/type-profit/all.get').default>>>>
    }
    '/api/type-profit/del': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/type-profit/del.delete').default>>>>
    }
    '/api/type-profit/edit': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/type-profit/edit.post').default>>>>
    }
    '/api/types-period/add': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/types-period/add.post').default>>>>
    }
    '/api/types-period/all': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/types-period/all.get').default>>>>
    }
    '/api/types-period/del': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/types-period/del.delete').default>>>>
    }
    '/api/types-period/edit': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/types-period/edit.post').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}