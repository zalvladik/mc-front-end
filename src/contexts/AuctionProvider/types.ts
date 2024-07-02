import type { AuctionFragment } from 'src/constants'
import { LotT } from 'src/services/api/Lot/types'
import { ReactChildrenT } from 'src/types'

export type AuctionContextDataT = {
  auctionFragment: AuctionFragment
  setAuctionFragment: (value: AuctionFragment) => void
  storageTotalPages: number
  currentPage: number
  setCurrentPage: (value: number) => void
  totalPages: number
  findLotByName: () => void
  searchValue: string
  setSearchValue: (value: string) => void
  selectedCategory: string
  setSelectedCategory: (value: string) => void
  isLoadingByeLots: boolean
  isLoadingUserLots: boolean
  dataUserLots: LotT[]
  dataByeLots: LotT[]
  isRefetchingByeLots: boolean
}

export type AuctionProviderT = ReactChildrenT
