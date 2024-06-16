import type { ItemT } from 'src/services/api/UserInventory/types'

export type DeleteLotResponseT = {
  lotId: number
  item: ItemT
}

export type LotT = {
  id: number
  price: number
  realname: string
  item: ItemT
}

export type GetLotsResponse = {
  totalPages: number
  lots: LotT[]
}

export type CreateLotProps = {
  itemId: number
  price: number
}

export type GetLotsProps = {
  page?: number
  category?: string
  display_nameOrType?: string
}
