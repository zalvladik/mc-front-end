import type { CSSProperties } from 'react'
import type { ItemT } from 'src/services/api/UserInventory/types'

export type ItemListProps = {
  items: ItemT[]
  isLoading: boolean
  selectToogle: (id: number) => void
  styleForItemBorder: (id: number) => CSSProperties
}
