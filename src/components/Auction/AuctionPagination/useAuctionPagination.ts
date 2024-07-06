import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useGetUserLots } from 'src/hooks/useGetUserLots'

export const useAuctionPagination = () => {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    auctionFragment,
    dataUserLots,
    dataByeLots,
  } = useAuction()

  const { user } = useUser()

  const { data } = useGetUserLots()

  const didShowUserLotsCount =
    auctionFragment === AuctionFragment.USER_LOTS ||
    auctionFragment === AuctionFragment.CREATE_LOT

  const didShowPagesInfo = () => {
    if (auctionFragment !== AuctionFragment.BUY_LOT) return !dataUserLots.length

    if (auctionFragment === AuctionFragment.BUY_LOT) return !dataByeLots.length
  }

  return {
    currentUserLots: data.length,
    currentPage,
    setCurrentPage,
    totalPages,
    maxLots: user.lotCount,
    didShowUserLotsCount,
    didShowPagesInfo: Boolean(didShowPagesInfo()),
    isByeFragment: auctionFragment === AuctionFragment.BUY_LOT,
  }
}
