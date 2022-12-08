<template>
  <div class="container">
    <form class="col-5">
      <div class="mb-3">
        <label for="username" class="form-label">Имя пользователя</label>
        <input id="username" v-model="registerData.username" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Адрес электронной почты</label>
        <input id="email" v-model="registerData.email" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input
          id="password"
          v-model="registerData.password"
          type="password"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Подтверждение пароля</label>
        <input
          id="confirmPassword"
          v-model="confirmPassword"
          type="password"
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-success w-100">
        Зарегистрировать пользователя
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerData: {
        username: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async register() {
      try {
        const user = await this.$axios.$post('/api/auth/signin', {
          fullname: this.registerData.fullname,
          email: this.registerData.email,
          password: this.registerData.password,
        })
        console.log(user)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
