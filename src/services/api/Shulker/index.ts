import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { ItemT } from 'src/services/api/Items/types'
import type { ShulkerT } from 'src/services/api/Shulker/types'

class Shulker {
  //   async post(itemIds: number[]): Promise<Shulker> {
  //     return api
  //       .post(FetchEndpoint.ITEM_TICKET, {
  //         json: { itemIds },
  //       })
  //       .json()
  //   }

  async getShulkers(): Promise<ShulkerT[]> {
    return api(FetchEndpoint.USER_SHULKERS).json()
  }

  async getShulkerItems(shulkerId: number): Promise<ItemT[]> {
    return api(`${FetchEndpoint.USER_SHULKERS}/${shulkerId}`).json()
  }

  //   async removeItems(itemIds: number[]): Promise<ItemT[]> {
  //     return api
  //       .put(`${FetchEndpoint.ITEM_TICKET}`, {
  //         json: { itemIds },
  //       })
  //       .json()
  //   }

  //   async deleteItemTicket(itemIds: number[], itemTicketId: number): Promise<ItemT[]> {
  //     return api
  //       .delete(`${FetchEndpoint.ITEM_TICKET}`, {
  //         json: { itemIds, itemTicketId },
  //       })
  //       .json()
  //   }
}

export default new Shulker()
