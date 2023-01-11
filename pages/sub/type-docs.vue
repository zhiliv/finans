<template>
  <div class="d-flex w-100 data-document h-100 flex-column">
    <div class="w-100 h-100">
      <h2
        class="border-bottom border-1px border-solid border-grey-lighten-3 w-100 m-0"
      >Типы документов</h2>
      <app-row class="h-90 overflow-auto">
        <app-col col-sm="12" col-md="12" col-lg="3" col-xl="3" col-xxl="2" class="h-100">
          <app-listbox-items
            class="h-95 shadow-container border border-1px border-solid border-grey-lighten-2 border-radius-5px m-t-05em"
          ></app-listbox-items>
        </app-col>
        <app-col col-sm="12" col-md="12" col-lg="9" col-xl="9" col-xxl="10" class>
          <div
            class="shadow-container h-95 w-100 border border-1px border-solid border-grey-lighten-2 border-radius border-radius-5px m-t-05em"
          >
            <app-row>
              <app-col col-sm="12" col-md="12" col-lg="3" col-xl="3" col-xxl="3">
                <div class="p-2">
                  <app-label class="m-0 fw-600 fs-18px">Наименование</app-label>
                  <app-input></app-input>
                </div>
              </app-col>
            </app-row>
          </div>
        </app-col>
      </app-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
  @import '~/assets/css/size.css';
  @import '~/assets/css/margin.css';
  @import '~/assets/css/overflow.css';
  @import '~/assets/css/font.css';
  @import '~/assets/css/padding.css';
  @media (max-width: 767.9px) {
    .data-document {
      margin-top: 50px;
    }
  }
</style>