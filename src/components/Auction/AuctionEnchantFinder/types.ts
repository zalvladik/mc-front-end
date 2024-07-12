import type { EnchantsWithMaxLvlT } from 'src/contexts/AuctionProvider/types'
import type { EnchantsTypesEnum } from 'src/types'

export type EnchantTranslationsT = {
  [key: string]: string
}

export type UpdateEnchantSearchParamsT = {
  itemType?: string
  enchantType?: EnchantsTypesEnum
  enchants?: EnchantsWithMaxLvlT
}
