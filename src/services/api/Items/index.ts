import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { ItemT } from 'src/services/api/Items/types'

class Items {
  async getItems(): Promise<ItemT[]> {
    return api(FetchEndpoint.USER_ITEMS).json()
  }
}

export default new Items()
