import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { UserResponseT, UserSkinResponseT } from 'src/services/api/User/types'

class User {
  async get(): Promise<UserResponseT> {
    return api(FetchEndpoint.USER).json()
  }

  async getSkin(): Promise<UserSkinResponseT> {
    return api(FetchEndpoint.USER_SKIN).json()
  }
}

export default new User()
