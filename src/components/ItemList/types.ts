import type { CSSProperties, HTMLProps } from 'react'
import type { SelectAreaColors } from 'src/constants'
import type { ItemT } from 'src/services/api/UserInventory/types'

export type ItemListProps = {
  items: ItemT[]
  selectToogle: (id: number[]) => void
  styleForItemBorder: (id: number) => CSSProperties
  selectAreaColor?: SelectAreaColors
  isNeedAreaSelect?: boolean
  isLoading: boolean
  itemGlowSizes: { containerSize: number; itemSize: number }
} & HTMLProps<HTMLDivElement>

export type CoordsProps = {
  x: number
  y: number
}

export type UseItemListProps = Pick<
  ItemListProps,
  'selectToogle' | 'selectAreaColor' | 'isNeedAreaSelect'
>
