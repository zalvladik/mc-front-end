import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useGetUserLots } from 'src/hooks/useGetUserLots'

export const useAuctionPagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useAuction()

  const { user } = useUser()

  const { data } = useGetUserLots()

  return {
    currentUserLots: data.length,
    currentPage,
    setCurrentPage,
    totalPages,
    maxLots: user.countLot,
  }
}
