<template>
  <b-container>
    <b-row align-h="center">
      <b-col order="4" sm="12" lg="4">
        <h2>Авторизация</h2>
        <form @submit.prevent="auth">
          <div class="mb-3">
            <label for="email" class="form-label">Имя пользователя</label>
            <input
              id="email"
              v-model="loginData.username"
              type="text"
              class="form-control"
              required
              placeholder="user"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input
              id="password"
              v-model="loginData.password"
              type="password"
              class="form-control"
              required
              placeholder="123456"
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Войти</button>
        </form>
        <b-alert v-model="authError" class="mt-3" variant="danger" dismissible>
          Ошибка авторизации
        </b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      loginData: {
        // Данные пользователя для авторизации
        username: '', // имя пользователя
        password: '', // пароль
      },
      authError: false, // статус ошибки
    }
  },
  methods: {
    /*
     * Авторизация пользователя
     * @function auth
     *
     */
    async auth() {
      const response = await this.$auth
        .loginWith('local', {
          data: this.loginData,
        })
        .catch(() => {
          this.authError = true
        }) // отправка запроса на авторизацию
      if (response) this.$router.push('/') // переход на страницу офферов, если авторизация успешна
    },
  },
}
</script>
