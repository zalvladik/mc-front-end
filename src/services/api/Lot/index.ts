import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { ItemT } from 'src/services/api/Items/types'
import type {
  ByeLotProps,
  CreateLotItemProps,
  CreateLotShulkerProps,
  DeleteLotResponseT,
  GetEnchantLotsProps,
  GetLotsProps,
  GetLotsResponse,
  LotT,
} from 'src/services/api/Lot/types'

class Lot {
  async getLots({
    page = 1,
    category,
    display_nameOrType,
    didNeedShulkers,
    didNeedUserLots,
    didPriceToUp,
    didNeedIdentical,
  }: GetLotsProps): Promise<GetLotsResponse> {
    const query = `${FetchEndpoint.LOT}?page=${encodeURIComponent(page.toString())}
      ${category ? `&category=${encodeURIComponent(category)}` : ''}
      ${display_nameOrType ? `&display_nameOrType=${encodeURIComponent(display_nameOrType)}` : ''}
      &didNeedShulkers=${encodeURIComponent(didNeedShulkers.toString())}
      &didNeedUserLots=${encodeURIComponent(didNeedUserLots.toString())}
      &didPriceToUp=${encodeURIComponent(didPriceToUp.toString())}
      &didNeedIdentical=${encodeURIComponent(didNeedIdentical.toString())}`

    return api(query.replace(/\s/g, '')).json()
  }

  async getEnchantLots({
    enchantType,
    enchants,
    itemType,
  }: GetEnchantLotsProps): Promise<GetLotsResponse> {
    return api(
      `${FetchEndpoint.LOG_OUT}?enchantType=${enchantType}${enchants ? `&enchants=${enchants}` : ''}${itemType ? `&itemType=${itemType}` : ''}`,
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
