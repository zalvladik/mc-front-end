import type {
  EnchantsEnum,
  EnchantsTypesEnum,
} from 'src/components/Auction/AuctionEnchantFinder/constants'

export type EnchantItemT = {
  enchantType: EnchantsTypesEnum
  text: string
  itemType: string
  onClick?: () => void
}

export type EnchantItemsTypesT = EnchantItemT[]

export type EnchantTranslationsT = {
  [key: string]: string
}

export type UpdateEnchantSearchParamsT = {
  itemType?: string
  enchantType?: EnchantsTypesEnum
  enchants?: EnchantsEnum[]
}
