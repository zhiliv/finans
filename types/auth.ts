/* Модель пользователя */
export interface UserAuth {
  id: number;
  name: string;
  password_hash: string;
  created_date: Date;
  update_date?: Date;
  email: string;
}

/* модель верификации JWT */
export type VerifyJWT = {
  user_id: number | null | undefined // Идентификатор пользователя
}

/* Модель входные параметры авторизации*/
export type EnterAuthData =  {
  login: string // имя пользователя
  password: string // пароль пользователя
}

/* Модель логирование авторизации */
export type LoggerAuth = {
  user_id: null | number // Идентификатор пользователя
  date_requiest: Date // установка даты запроса
  date_auth: null | Date // установка даты авторизации
  status: boolean // установка статуса
  token: null | string // установка токена
}