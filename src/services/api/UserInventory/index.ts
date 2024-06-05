import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { ItemT, UserMoneyT } from 'src/services/api/UserInventory/types'

class UserInventory {
  async getItems(): Promise<ItemT[]> {
    return api(FetchEndpoint.USER_INVENTORY_ITEMS).json()
  }

  async getMoney(): Promise<UserMoneyT> {
    return api(FetchEndpoint.USER_INVENTORY_MONEY).json()
  }
}

export default new UserInventory()
