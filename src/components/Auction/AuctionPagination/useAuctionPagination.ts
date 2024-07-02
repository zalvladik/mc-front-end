import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useGetUserLots } from 'src/hooks/useGetUserLots'

export const useAuctionPagination = () => {
  const { currentPage, setCurrentPage, totalPages, auctionFragment } = useAuction()

  const { user } = useUser()

  const { data } = useGetUserLots()

  const didShowUserLotsCount =
    auctionFragment === AuctionFragment.USER_LOTS ||
    auctionFragment === AuctionFragment.CREATE_LOT

  return {
    currentUserLots: data.length,
    currentPage,
    setCurrentPage,
    totalPages,
    maxLots: user.countLot,
    didShowUserLotsCount,
  }
}
