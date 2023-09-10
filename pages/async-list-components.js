export const listComponents = {
  'edit_categories': markRaw(defineAsyncComponent(() => import(`./guides/categories/edit_categories.vue`))),
  'modal_name': markRaw(defineAsyncComponent(() => import(`./modals/modal_name.vue`))),
  'modal_text': markRaw(defineAsyncComponent(() => import(`./modals/modal-text.vue`))),
}
  
