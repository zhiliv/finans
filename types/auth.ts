/* Модель пользователя */
export interface UserAuth  {
  usr_id: number
  usr_name: string
  usr_password_hash: string
  usr_created_date: Date
  usr_update_date?: Date
  usr_email: string
}

/* модель верификации JWT */
export interface VerifyJWT  {
  user_id: number | null | undefined // Идентификатор пользователя
}

/* Модель входные параметры авторизации*/
export interface EnterAuthData  {
  login: string // имя пользователя
  password: string // пароль пользователя
}

/* Модель логирование авторизации */
export interface LoggerAuth  {
  user_id: null | number // Идентификатор пользователя
  date_request: string // установка даты запроса
  date_auth: null | string // установка даты авторизации
  status: boolean // установка статуса
  token: null | string // установка токена
}