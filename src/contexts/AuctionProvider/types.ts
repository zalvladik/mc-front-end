import type {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query'
import type { AuctionFragment } from 'src/constants'
import type {
  EnchantSearchParamsT,
  FilterListParamsT,
} from 'src/hooks/useLotsSearchParams/types'
import type { GetLotsResponse, LotT } from 'src/services/api/Lot/types'
import type { EnchantsEnum, ReactChildrenT } from 'src/types'

export type AuctionContextDataT = {
  isCanNewFetchGetByeLots: boolean
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
  setStorageTotalPagesByeLots: (value: number) => void
  isLoadingByeLots: boolean
  isLoadingUserLots: boolean
  dataUserLots: LotT[]
  dataByeLots: LotT[]
  refetchByeLots: (
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
  filterListParams: FilterListParamsT
  updateFilterListParams: (value: FilterListParamsT) => void
}

export type AuctionProviderT = ReactChildrenT

export type EnchantsWithMaxLvlT = Partial<{
  [key in EnchantsEnum]: number
}>
