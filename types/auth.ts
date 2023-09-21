/* Модель пользователя */
export interface User {
  id: number | null // Идентификатор пользователя
  login: string // Имя пользователя
  password: string // Пароль пользователя
}

/* модель верификации JWT */
export interface VerifyJWT {
  user_id: number | null | undefined // Идентификатор пользователя
}

/* Модель входные параметры авторизации*/
export interface EnterAuthData {
  login: string // имя пользователя
  password: string // пароль пользователя
}

/* Модель логирование авторизации */
export interface LoggerAuth {
  user_id: null | number // Идентификатор пользователя
  date_requiest: Date // установка даты запроса
  date_auth: null | Date // установка даты авторизации
  status: boolean // установка статуса
  token: null | string // установка токена
}