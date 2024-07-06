import type { UserT } from 'src/contexts/UserProvider/types'

export const FETCH_URL = import.meta.env.VITE_URL_BY_BACKEND

export const FETCH_URL_IMG = `${FETCH_URL}/public`

export enum ComponentIds {
  STORE = 'store',
  MAIN_TITLE = 'main_title',
  ADVANTAGE = 'advantage',
  SOCIAL = 'social',
}

export enum SocketTypes {
  INCREMENT_MONEY,
  DECREMENT_MONEY,
  ADD_ITEMS,
  REMOVE_ITEMS,
}

export enum Role {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  HELPER = 'helper',
  POLICE = 'police',
  USER = 'user',
  NOT_AUTH = '',
}

export enum RoleUA {
  ADMIN = 'Адмін',
  MODERATOR = 'Модератор',
  HELPER = 'Хелпер',
  POLICE = 'Поліція',
  USER = 'Гравець',
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
  USER_ITEMS = 'user_items',
  USER_ITEM_TICKETS = 'user_item_tickets',
  USER_LOTS = 'user_lots',
  LOTS = 'lots',
  ITEM_TICKET = 'item_ticket',
  USER_SKIN = 'user_skin',
  ALL_USERS = 'all_users',
  USER_ADVANCEMENTS = 'user_advancements',
  USER_SHULKERS = 'user_shulkers',
  USER_SHULKER_ITEMS = 'user_shulker_items',
}

export enum AuctionFragment {
  BUY_LOT = 'buy_lot',
  CREATE_LOT = 'create_lot',
  USER_LOTS = 'user_lots',
}

export enum FetchEndpoint {
  USER = 'user',
  USER_ITEMS = 'user/items',
  USER_SKIN = 'user/skin',
  USER_ADVANCEMENTS = 'user/advancements',
  USER_ITEM_TICKETS = 'item_ticket/user_tickets',
  LOT = 'lot',
  LOT_USER = 'lot/user',
  ITEM_TICKET = 'item_ticket',
  SIGN_IN = 'auth/sign_in',
  LOG_OUT = 'auth/log_out',
  REFRESH_TOKEN = 'auth/refresh_token',
  USER_SHULKERS = 'user/shulkers',
}

export enum LocalStorageKey {
  ACCESS_TOKEN = 'accessToken',
  NOTIFICATION = 'notification',
  IS_INIT_NOTIFICATION = 'is_init_notification',
}

export const STALE_TIME = 60 * 1000 * 24

export const defaultUser: UserT = {
  id: 0,
  username: '',
  money: 0,
  role: [Role.NOT_AUTH],
  shulkerCount: 0,
  itemCount: 0,
  lotCount: 0,
}
