import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { sequelize } from '~/server/db.js'
import * as bcrypt from 'bcrypt' // модуль криптографии

const config = useRuntimeConfig()


export default NuxtAuthHandler({
  // secret needed to run nuxt-auth in production mode (used to encrypt data)
  secret: config.secret_key,
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      // имя для отображения в форме знака (например, вход с ... ')
      name: 'Авторизация',
      // Учетные данные используются для создания подходящей формы на странице знака.
      // Вы можете указать любые поля, которые вы ожидаете отправить.
      // напримерДомен, имя пользователя, пароль, токен 2FA и т. Д.
      // Вы можете передать любой атрибут HTML в тег <pint> через объект.
      credentials: {
        username: { label: 'Имя пользователя', type: 'text', placeholder: 'Логин' },
        password: { label: 'Пароль', type: 'password', placeholder: 'Пароль' },
      },
      async authorize(credentials) {
        // вам нужно предоставить свою собственную логику, которая принимает учетные данные
        // отправлено и возвращает либо объект, представляющий пользователя или значение
        // это ложно/нулевое, если учетные данные недействительны.
        // Примечание: приведенная ниже логика не безопасна или не соответствует аутентификации!
        const params = {
          where: {
            name: credentials.username,
          },
        }
        const users = await sequelize.models.users.findAll(params) // получение пользователя по логину
        const user = users.length ? users[0].dataValues : {}
        const checkHash = await bcrypt.compare(credentials.password, user.password_hash) // проверка пароля по хэшу
        
        if (checkHash) {
          // любой возвращен объекта будет сохранен в свойстве `user`’
          return user
        } else {
          // eslint-disable-next-line no-console
          console.error('Неверные учетные данные')

          // Если вы вернете NULL, то будет отображаться ошибка, посоветующая пользователю проверить их данные.
          return null

          // Вы также можете отклонить этот обратный вызов с ошибкой, поэтому пользователь будет отправлен на страницу ошибки с сообщением об ошибке в качестве параметра запроса
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      delete token.password_hash
      delete token.update_date
      if (account && user) {
        return {
          ...token,
          ...user,
        }
      }

      return token
    },
    async session({ session, token }) {
      delete session.user.id
      session.user = {
        ...session.user,
        ...token,
      }
      return session
    },
  },
})
