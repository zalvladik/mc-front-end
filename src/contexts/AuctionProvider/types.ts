import type { AuctionFragment } from 'src/constants'
import type {
  EnchantSearchParamsT,
  FilterListParamsT,
  UpdateFilterListParamsProps,
  UpdateNewEnchantSearchParamsT,
} from 'src/hooks/useLotsSearchParams/types'
import type { LotT } from 'src/services/api/Lot/types'
import type { EnchantsEnum, ReactChildrenT } from 'src/types'

export type AuctionContextDataT = {
  isCanNewFetchGetEnchantItems: boolean
  isCanNewFetchGetByeLots: boolean
  auctionFragment: AuctionFragment
  setAuctionFragment: (value: AuctionFragment) => void
  currentPage: number
  setCurrentPage: (value: number) => void
  totalPages: number
  mutateByeLotsHandleButton: () => void
  searchValue: string
  setSearchValue: (value: string) => void
  selectedCategory: string
  setSelectedCategory: (value: string) => void
  setStorageTotalPagesByeLots: (value: number) => void
  updatePrevEnchantSearchParams: (value: { isReset?: boolean }) => void
  setStorageTotalPagesEnchantLots: (value: number) => void
  didShowEnchantControlPanel: boolean
  setDidShowEnchantControlPanel: (value: boolean) => void
  isLoadingByeLots: boolean
  isLoadingUserLots: boolean
  isLoadingEnchantLots: boolean
  dataUserLots: LotT[]
  dataByeLots: LotT[]
  dataEnchantLots: LotT[]
  mutateByeLotsHandle: (value: void) => void
  mutateEnchantLotsHandle: (value: void) => void
  mutateEnchantLotsHandleButton: (value: void) => void
  isFragment: {
    isBuyFragment: boolean
    isCreateLotFragment: boolean
    isUserLotsFragment: boolean
    isEnchantFinderFragment: boolean
  }
  newEnchantSearchParams: EnchantSearchParamsT
  updateEnchantSearchParams: (value: UpdateNewEnchantSearchParamsT) => void
  filterListParams: FilterListParamsT
  updateFilterListParams: (value: UpdateFilterListParamsProps) => void
}

export type AuctionProviderT = ReactChildrenT

export type EnchantsWithMaxLvlT = Partial<{
  [key in EnchantsEnum | string]: number
}>
