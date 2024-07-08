import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useGetUserLots } from 'src/hooks/useGetUserLots'

export const useAuctionPagination = () => {
  const {
    currentPage,
    setCurrentPage,
    auctionFragment,
    dataUserLots,
    dataByeLots,
    totalPages,
  } = useAuction()

  const { user } = useUser()

  const { data } = useGetUserLots()

  const didShowUserLotsCount =
    auctionFragment === AuctionFragment.USER_LOTS ||
    auctionFragment === AuctionFragment.CREATE_LOT

  const didVanishPagesInfo = () => {
    if (auctionFragment === AuctionFragment.CREATE_LOT) return true

    if (auctionFragment !== AuctionFragment.BUY_LOT)
      return !dataUserLots.length || totalPages <= 1

    if (auctionFragment === AuctionFragment.BUY_LOT)
      return !dataByeLots.length || totalPages <= 1
  }

  return {
    currentUserLots: data.length,
    currentPage,
    setCurrentPage,
    totalPages,
    maxLots: user.lotCount,
    didShowUserLotsCount,
    didVanishPagesInfo: Boolean(didVanishPagesInfo()),
    isByeFragment: auctionFragment === AuctionFragment.BUY_LOT,
  }
}
