export const listComponents = {
  'edit_categories': markRaw(defineAsyncComponent(() => import(`./guides/categories/edit_categories.vue`))),
  'modal_name': markRaw(defineAsyncComponent(() => import(`./modals/modal_name.vue`))),
  'modal_text': markRaw(defineAsyncComponent(() => import(`./modals/modal-text.vue`))),
  'edit_user': markRaw(defineAsyncComponent(() => import(`./users/edit_user.vue`))),
  'edit_type_docs': markRaw(defineAsyncComponent(() => import(`./guides/typedocs/edit_type_docs.vue`))),
}
  
