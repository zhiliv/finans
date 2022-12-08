<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            class="item"
            :active="isRouteActive('index')"
            name="offers"
            >Офферы</b-nav-item
          >
          <b-nav-item-dropdown text="Данные" right class="item">
            <b-dropdown-item @click="setShowModalTypesOfServices"
              >Виды услуг</b-dropdown-item
            >
            <b-dropdown-item @click="setShowModalOrganization">
              Организации
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto item">
          <b-nav-item-dropdown text="Профиль" right class="item">
            <b-dropdown-item @click="signOut">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <typeOffers />
    <OrganizationModal
      :show="$store.state.showModalOrganization"
    ></OrganizationModal>
  </div>
</template>

<script>
import typeOffers from '../pages/modal/type-offers/type-offers.vue'
import OrganizationModal from '~/components/Organization.vue'
export default {
  /*
   * Подключение компонентов
   */
  components: { typeOffers, OrganizationModal },
  data() {
    return {}
  },
  methods: {
    /*
     * Разавторизация
     * @async
     * @function signOut
     */
    async signOut() {
      await this.$auth.logout()
    },

    /*
     * Добавление класса active для пункта меню, которые равен роуту
     * @function isRouteActive
     * @param {String} nameRoute Имя роута
     * @return {Boolean} Значение сравнения имени роута с переданным параметром
     */
    isRouteActive(nameRoute) {
      return this.$route.name === nameRoute
    },

    /*
     * Изменение значения состояния открытого окна "Виды услуг" в store
     * @function setShowModalTypesOfServices
     */
    setShowModalTypesOfServices() {
      this.$modal.show(
        'type-services',
        {
          text: 'Пример',
        },
        { minWidth: '1000px' }
      )
    },

    /*
     * Изменение значения состояния открытого окна "Организации" в store
     * @function setShowModalOrganization
     */
    setShowModalOrganization() {
      this.$store.commit('getShowModalOrganization')
    },
  },
}
</script>

<style>
.item {
  font-size: 14px;
}

.active {
  font-weight: 600;
  text-decoration: underline;
}
</style>
