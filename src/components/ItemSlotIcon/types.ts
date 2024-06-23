import type { ItemT } from 'src/services/api/Items/types'

import type { ItemHoverDescriptionProps } from 'src/components/ItemHoverDescription/types'

export type ItemSlotIconProps = {
  onClick?: (value: void) => void
  style?: React.CSSProperties
  fontSize?: number
  containerSize: number
  itemSize: number
  setHoverDescriptionProps: (value: ItemHoverDescriptionProps) => void
} & ItemT
