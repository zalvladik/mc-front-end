export const FETCH_URL = import.meta.env.VITE_URL_BY_BACKEND

export const FETCH_URL_IMG = `${FETCH_URL}/public`

export enum ComponentIds {
  STORE = 'store',
  MAIN_TITLE = 'main_title',
  ADVANTAGE = 'advantage',
  SOCIAL = 'social',
}

export enum CacheKeys {
  WHITELIST = 'whitelist',
}

export enum FetchEndpoint {
  WHITELIST = 'whitelist',
}
