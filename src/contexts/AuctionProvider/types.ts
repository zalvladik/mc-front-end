import type { AuctionFragment } from 'src/constants'
import type { LotT } from 'src/services/api/Lot/types'
import type { ReactChildrenT } from 'src/types'

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
  isLoadingByeLots: boolean
  isLoadingUserLots: boolean
  dataUserLots: LotT[]
  dataByeLots: LotT[]
}

export type AuctionProviderT = ReactChildrenT
