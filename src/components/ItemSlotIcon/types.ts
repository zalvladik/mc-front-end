import type { ItemT } from 'src/services/api/UserInventory/types'

export type ItemSlotIconProps = {
  onClick?: (value: void) => void
  style?: React.CSSProperties
  fontSize?: number
  containerSize: number
  itemSize: number
} & ItemT
