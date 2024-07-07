import type { ItemT } from 'src/services/api/Items/types'

import type { ShulkerT } from '../Shulker/types'

export type DeleteLotResponseT = {
  id: number
}

export type LotT = {
  id: number
  price: number
  username: string
  item: ItemT | null
  shulker: ShulkerT | null
}

export type GetLotsResponse = {
  totalPages: number
  lots: LotT[]
}

export type CreateLotItemProps = {
  itemId: number
  price: number
}

export type CreateLotShulkerProps = {
  shulkerId: number
  price: number
}

export type ByeLotProps = {
  lotId: number
}

export type GetLotsProps = {
  page?: number
  category?: string
  display_nameOrType?: string
}
