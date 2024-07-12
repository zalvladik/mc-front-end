import type { HTMLProps } from 'react'
import type { EnchantsTypesEnum } from 'src/types'

export type AuctionCategoryProps = HTMLProps<HTMLDivElement>

export type ButtonItemsProps = {
  isSelected: boolean
}

export type ButtonCategoryProps = {
  isSelected: boolean
}

export type EnchantItemT = {
  enchantType: EnchantsTypesEnum
  display_name: string
  itemType: string
  onClick?: () => void
}

export type EnchantItemsTypesT = EnchantItemT[]
