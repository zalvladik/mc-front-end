import { LocalStorageKey } from 'src/constants'
import type { UserT } from 'src/contexts/UserProvider/types'
import Auth from 'src/services/api/Auth'

export const refetchToken = async (): Promise<UserT> => {
  const data = await Auth.refreshToken()

  localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, data.accessToken)

  return data.user
}
