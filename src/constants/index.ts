export const FETCH_URL = 'http://localhost:8080'

export const FETCH_URL_IMG = 'http://localhost:8080/public'

export enum ComponentIds {
  STORE = 'store',
  MAIN_TITLE = 'main_title',
  ADVANTAGE = 'advantage',
  SOCIAL = 'social',
}

export enum AdvancementsIcons {
  SQUARE = 'square',
  STAR = 'star',
  OVAL = 'oval',
}

export enum SelectAreaColors {
  Red = 'red',
  Green = 'green',
}

export enum CacheKeys {
  USER = 'user',
  USER_INVENTORY_ITEMS = 'user_inventory_items',
  USER_INVENTORY_MONEY = 'user_inventory_money',
  USER_INVENTORY_ITEM_TICKETS = 'user_inventory_item_tickets',
  ITEM_TICKET = 'item_ticket',
  USER_SKIN = 'user_skin',
  ALL_USERS = 'all_users',
  USER_ADVANCEMENTS = 'user_advancements',
}

export enum FetchEndpoint {
  USER = 'user',
  USER_INVENTORY_ITEMS = 'user_inventory/items',
  USER_INVENTORY_MONEY = 'user_inventory/money',
  USER_SKIN = 'user/skin',
  USER_ADVANCEMENTS = 'user/advancements',
  USER_ITEM_TICKETS = 'item_ticket/user_tickets',
  ITEM_TICKET = 'item_ticket',
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
