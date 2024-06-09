import type { CSSProperties } from 'react'
import type { SelectAreaColors } from 'src/constants'
import type { ItemT } from 'src/services/api/UserInventory/types'

export type ItemListProps = {
  items: ItemT[]
  selectToogle: (id: number | number[]) => void
  styleForItemBorder: (id: number) => CSSProperties
  selectAreaColor: SelectAreaColors
}

export type CoordsProps = {
  x: number
  y: number
}

export type UseItemListProps = Pick<
  ItemListProps,
  'selectToogle' | 'selectAreaColor'
>
