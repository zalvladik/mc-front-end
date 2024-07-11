import type {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query'
import type { AuctionFragment } from 'src/constants'
import type { GetLotsResponse, LotT } from 'src/services/api/Lot/types'
import type { ReactChildrenT } from 'src/types'

import type {
  EnchantsEnum,
  EnchantsTypesEnum,
} from 'src/components/Auction/AuctionEnchantFinder/constants'

export type AuctionContextDataT = {
  auctionFragment: AuctionFragment
  setAuctionFragment: (value: AuctionFragment) => void
  currentPage: number
  setCurrentPage: (value: number) => void
  totalPages: number
  findLotByName: () => void
  searchValue: string
  setSearchValue: (value: string) => void
  selectedCategory: string
  setSelectedCategory: (value: string) => void
  setStorageTotalPages: (value: number) => void
  isLoadingByeLots: boolean
  isLoadingUserLots: boolean
  dataUserLots: LotT[]
  dataByeLots: LotT[]
  refetch: (
    options?: (RefetchOptions & RefetchQueryFilters<unknown>) | undefined,
  ) => Promise<QueryObserverResult<GetLotsResponse, unknown>>
  isFragment: {
    isBuyFragment: boolean
    isCreateLotFragment: boolean
    isUserLotsFragment: boolean
    isEnchantFinderFragment: boolean
  }
  enchantSearchParams: EnchantSearchParamsT
  setEnchantSearchParams: (value: EnchantSearchParamsT) => void
}

export type AuctionProviderT = ReactChildrenT

export type EnchantsWithMaxLvlT = Partial<{
  [key in EnchantsEnum]: number
}>

export type EnchantSearchParamsT = {
  enchantType: EnchantsTypesEnum | ''
  enchants: EnchantsWithMaxLvlT
  itemType: string | ''
}
