import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { ItemT } from 'src/services/api/Items/types'
import type {
  ByeLotProps,
  CreateLotItemProps,
  CreateLotShulkerProps,
  DeleteLotResponseT,
  GetLotsProps,
  GetLotsResponse,
  LotT,
} from 'src/services/api/Lot/types'

class Lot {
  async getLots({
    page = 1,
    category,
    display_nameOrType,
  }: GetLotsProps): Promise<GetLotsResponse> {
    return api(
      `${FetchEndpoint.LOT}?page=${page}${category ? `&category=${category}` : ''}${display_nameOrType ? `&display_nameOrType=${display_nameOrType}` : ''}`,
    ).json()
  }

  async getUserLots(): Promise<LotT[]> {
    return api(`${FetchEndpoint.LOT_USER}`).json()
  }

  async postItemLot(body: CreateLotItemProps): Promise<LotT> {
    return api
      .post(FetchEndpoint.LOT_ITEM, {
        json: body,
      })
      .json()
  }

  async postShulkerLot(body: CreateLotShulkerProps): Promise<LotT> {
    return api
      .post(FetchEndpoint.LOT_SHULKER, {
        json: body,
      })
      .json()
  }

  async byeLotItem(body: ByeLotProps): Promise<ItemT> {
    return api
      .put(FetchEndpoint.LOT_ITEM, {
        json: body,
      })
      .json()
  }

  async byeLotShulker(body: ByeLotProps): Promise<ItemT> {
    return api
      .put(FetchEndpoint.LOT_SHULKER, {
        json: body,
      })
      .json()
  }

  async deleteUserLot(id: number): Promise<DeleteLotResponseT> {
    return api.delete(`${FetchEndpoint.LOT}?id=${id}`).json()
  }
}

export default new Lot()
