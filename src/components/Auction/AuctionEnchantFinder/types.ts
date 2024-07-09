import type { EnchantsTypesEnum, ItemTypesEnchantsFinderEnum } from 'src/constants'

export type EnchantItemT = {
  enchantType: EnchantsTypesEnum
  text: string
  itemType: string
  onClick?: () => void
}

export type EnchantItemsTypesT = EnchantItemT[]
