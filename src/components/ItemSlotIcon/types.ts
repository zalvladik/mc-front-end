import type { ItemT } from 'src/services/api/Items/types'

export type ItemSlotIconProps = {
  onClick?: (value: void) => void
  style?: React.CSSProperties
  fontSize?: number
  containerSize: number
  itemSize: number
} & ItemT

export type UseItemSlotIconProps = {
  description: string[] | null
  display_name: string
  durability: string | null
}
