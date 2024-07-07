import type { ItemT } from 'src/services/api/Items/types'
import type { ShulkerT } from 'src/services/api/Shulker/types'

export type ItemSlotIconProps = {
  onClick?: (value: void) => void
  style?: React.CSSProperties
  fontSize?: number
  containerSize: number
  itemSize: number
  didShowDescription?: boolean
} & (ItemT | ShulkerT)

export type UseItemSlotIconProps = {
  description: string[] | null
  display_name: string
  durability: string | null
  didShowDescription?: boolean
}
