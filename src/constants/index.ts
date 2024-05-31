export const FETCH_URL = 'http://localhost:8080/'

export enum COMPONENT_IDS {
  STORE = 'store',
  MAIN_TITLE = 'main_title',
  ADVANTAGE = 'advantage',
  SOCIAL = 'social',
}

export enum ADVANCEMENTS_ICONS {
  SQUARE = 'square',
  STAR = 'star',
  OVAL = 'oval',
}

export enum CacheKeys {
  USER = 'user',
  USER_INVENTORY = 'user_inventory',
  USER_SKIN = 'user_skin',
  ALL_USERS = 'all_users',
  USER_ADVANCEMENTS = 'user_advancements',
}

export enum FetchEndpoint {
  USER = 'user',
  USER_INVENTORY = 'user_inventory',
  USER_SKIN = 'user/skin',
  USER_ADVANCEMENTS = 'user/advancements',
  SIGN_IN = 'auth/sign_in',
  LOG_OUT = 'auth/log_out',
  REFRESH_TOKEN = 'auth/refresh_token',
}

export enum LocalStorageKey {
  ACCESS_TOKEN = 'accessToken',
  NOTIFICATION = 'notification',
  IS_INIT_NOTIFICATION = 'is_init_notification',
}

export const STALE_TIME = 60 * 1000 * 24

export const defaultUser = {
  id: 0,
  realname: '',
  lastlogin: '',
}
