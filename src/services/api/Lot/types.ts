import type { ItemT } from 'src/services/api/Items/types'

export type DeleteLotResponseT = {
  lotId: number
  item: ItemT
}

export type LotT = {
  id: number
  price: number
  username: string
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

export type ByeLotProps = {
  lotId: number
}

export type GetLotsProps = {
  page?: number
  category?: string
  display_nameOrType?: string
}
