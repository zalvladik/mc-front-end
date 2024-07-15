import type { EnchantsWithMaxLvlT } from 'src/contexts/AuctionProvider/types'
import type { EnchantsTypesEnum } from 'src/types'

export type EnchantSearchParamsT = {
  enchantType: EnchantsTypesEnum | ''
  enchants: EnchantsWithMaxLvlT
  itemType: string | ''
}

export type FilterListParamsT = {
  didNeedUserLots: boolean
  didNeedShulkers: boolean
  didNeedIdentical: boolean
  didPriceToUp: boolean
}

export type ByeLotsSearchParamsT = {
  category: string | ''
  page: number
  display_nameOrType: string | ''
}

export type PrevByeLotsSearchParamsT = { [key: string]: any } & FilterListParamsT &
  ByeLotsSearchParamsT

export type NewByeLotsSearchParamsT = { [key: string]: any } & ByeLotsSearchParamsT

export type UpdateFilterListParamsProps = Partial<FilterListParamsT>

export type UpdateNewByeLotsSearchParamsProps = Partial<ByeLotsSearchParamsT>
