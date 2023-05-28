<template>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div
      class="w-full p-6 m-auto rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl bg-zinc-700"
    >
      <div class="space-y-4">
        <div>
          <app-input
            v-model.number="valueModel.login"
            class="w-full input input-bordered"
            type="user"
            label="Логин"
          />
        </div>
        <div>
          <app-input
            v-model.number="valueModel.password"
            class="w-full input input-bordered"
            type="password"
            label="Пароль"
          />
        </div>
        <div>
          <app-button type="submit" @click="auth" class="w-full" :disabled="disabledAuth">Войти</app-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
/* Установка шаблона */
definePageMeta({
  layout: 'clean',
})

const valueModel = ref({ login: null, password: null }) // Модель данных формы

/* Вычисление активности кнопки "Войти" */
const disabledAuth = computed(() => {
  return !valueModel.value.login || !valueModel.value.password
})

/**
 * Авторизация
 * @function auth
 */
async function auth() {
  const { data: isAuth, error } = await useFetch('api/auth/authentication', { method: 'POST', body: valueModel.value }) // получение данных списка
  if (error.value) showToast({ message: error.value.data.message, type: 'warning' })
  else window.location.href = '/' // редирект на страницу
}
</script>
