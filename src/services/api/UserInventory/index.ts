import type { UserInventoryT } from 'src/services/api/UserInventory/types'

import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'

class UserInventory {
  async get(): Promise<UserInventoryT> {
    return api(FetchEndpoint.USER_INVENTORY).json()
  }
}

export default new UserInventory()
