import ky from 'ky'
import { api } from 'src/configs/ky'
import { FETCH_URL, FetchEndpoint, LocalStorageKey } from 'src/constants'
import { getFromLocalStorage } from 'src/helpers'
import type { AuthResponseT, CredentialsT } from 'src/services/api/Auth/types'

class Auth {
  async login(data: CredentialsT): Promise<AuthResponseT> {
    return api
      .post(FetchEndpoint.SIGN_IN, {
        json: data,
        credentials: 'include',
      })
      .json()
  }

  async logout(): Promise<void> {
    return ky
      .post(`${FETCH_URL}/${FetchEndpoint.LOG_OUT}`, {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${getFromLocalStorage<string>(LocalStorageKey.ACCESS_TOKEN)}`,
        },
      })
      .json()
  }

  async refreshToken(): Promise<AuthResponseT> {
    return ky
      .get(`${FETCH_URL}/${FetchEndpoint.REFRESH_TOKEN}`, { credentials: 'include' })
      .json()
  }
}

export default new Auth()
