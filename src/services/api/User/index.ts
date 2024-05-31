import type { UserResponseT, UserSkinResponseT } from 'src/services/api/User/types'

import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'

class User {
  async get(): Promise<UserResponseT> {
    return api(FetchEndpoint.USER).json()
  }

  async getSkin(): Promise<UserSkinResponseT> {
    return api(FetchEndpoint.USER_SKIN).json()
  }
}

export default new User()
