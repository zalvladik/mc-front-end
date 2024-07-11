import type { HTMLProps } from 'react'
import type { ItemT } from 'src/services/api/Items/types'

export type ItemSlotIconProps = {
  onClick?: (value: void) => void
  style?: React.CSSProperties
  fontSize?: number
  containerSize: number
  itemSize: number
  didShowDescription?: boolean
  id?: number
  display_name: string
  type: string
  categories?: string[]
  items?: ItemT[]
  amount?: number
  description?: string[] | null
  enchants?: string[] | null
  durability?: string | null
} & HTMLProps<HTMLDivElement>

export type UseItemSlotIconProps = {
  description?: string[] | null
  display_name: string
  durability?: string | null
  didShowDescription?: boolean
}
