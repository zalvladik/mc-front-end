import type { CSSProperties, HTMLProps } from 'react'
import type { SelectAreaColors } from 'src/constants'
import type { ItemT } from 'src/services/api/Items/types'
import type { ShulkerT } from 'src/services/api/Shulker/types'

export type ItemListProps = {
  emptyText?: string
  items: (ShulkerT | ItemT)[]
  selectToogle?: (id: number[]) => void
  styleForItemBorder?: (id: number) => CSSProperties
  selectAreaColor?: SelectAreaColors
  isNeedAreaSelect?: boolean
  isLoading: boolean
  itemSlotIconProps: { containerSize: number; itemSize: number; fontSize?: number }
} & HTMLProps<HTMLDivElement>

export type CoordsProps = {
  x: number
  y: number
}

export type UseItemListProps = Pick<
  ItemListProps,
  'selectToogle' | 'selectAreaColor' | 'isNeedAreaSelect'
>
