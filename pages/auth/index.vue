<template>
  <div class="relative flex flex-col justify-center h-screen overflow-hidden">
    <div class="w-full p-6 m-auto rounded-md shadow-2xl ring-2 lg:max-w-xl">
      <div class="space-y-4">
        <div>
          <app-input
            class="w-full input"
            label="Логин"
            type="user"
            v-model.number="valueModel.login"
          />
        </div>
        <div>
          <app-input
            class="w-full"
            label="Пароль"
            type="password"
            v-model.number="valueModel.password"
          />
        </div>
        <div>
          <app-button
            :disabled="disabledAuth"
            @click="auth"
            @keyup.enter="auth"
            class="w-full btn-primary"
          >Войти</app-button>
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
  if(error.value) showToast({ message: error.value.data.message, type: 'warning' })
  else window.location.href = '/' // редирект на страницу
}

onMounted(() => {
  /* Отслеживание нажатия кнопки "Enter" */
  document.body.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') auth()
  })
})
</script>
