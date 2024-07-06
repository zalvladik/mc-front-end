import type { ItemT } from 'src/services/api/Items/types'

export type ItemSlotIconProps = {
  onClick?: (value: void) => void
  style?: React.CSSProperties
  fontSize?: number
  containerSize: number
  itemSize: number
  didShowDescription?: boolean
} & ItemT

export type UseItemSlotIconProps = {
  description: string[] | null
  display_name: string
  durability: string | null
  didShowDescription?: boolean
}
