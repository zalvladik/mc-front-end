import type { AuctionFragment } from 'src/constants'
import type {
  EnchantSearchParamsT,
  FilterListParamsT,
  UpdateFilterListParamsProps,
} from 'src/hooks/useLotsSearchParams/types'
import type { LotT } from 'src/services/api/Lot/types'
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
  mutate: (value: void) => void
  isFragment: {
    isBuyFragment: boolean
    isCreateLotFragment: boolean
    isUserLotsFragment: boolean
    isEnchantFinderFragment: boolean
  }
  enchantSearchParams: EnchantSearchParamsT
  setEnchantSearchParams: (value: EnchantSearchParamsT) => void
  filterListParams: FilterListParamsT
  updateFilterListParams: (value: UpdateFilterListParamsProps) => void
}

export type AuctionProviderT = ReactChildrenT

export type EnchantsWithMaxLvlT = Partial<{
  [key in EnchantsEnum]: number
}>
