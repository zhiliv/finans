<template>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div class="w-full p-6 m-auto rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl bg-zinc-700">
      <div class="space-y-4">
        <div>
          <app-input v-model.number="valueModel.login" class="w-full input input-bordered" type="user" label="Логин" />
        </div>
        <div>
          <app-input v-model.number="valueModel.password" class="w-full input input-bordered" type="password" label="Пароль" />
        </div>
        <div>
          <app-button type="submit" @click="auth" class="w-full" :disabled="disabledAuth">Войти</app-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
definePageMeta({
  layout: "clean"
});

export default {
  data(){
    return {
      valueModel: { // модель данных формы
        login: null,  // имя пользователя
        password: null // пароль пользователя
      }
    }
  },
  computed: {
    /* 
    * Вычисление активности кнопки "Войти"
    * @function disabledAuth
    * @return {Boolean}
    */
    disabledAuth(){
      return !this.valueModel.login || !this.valueModel.password
    }
  },  
  methods: {
    /* 
    * Событие при нажатии на кнопку "Войти"
    * @function auth
    */
    async auth(){
      const { data: isAuth, error } = await useFetch('api/auth/authentication', { method: "POST", body: this.valueModel}) // получение данных списка
      if(isAuth) window.location.href = "/"; // редирект на страницу
    }
  }
}

</script>
