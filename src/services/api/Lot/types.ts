import type { ItemT } from 'src/services/api/UserInventory/types'

export type LotT = {
  itemId: number
  price: number
  item: ItemT
}

export type CreateLotProps = {
  itemId: number
  price: number
}
