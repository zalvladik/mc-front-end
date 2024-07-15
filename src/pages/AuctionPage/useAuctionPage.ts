import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useUser } from 'src/contexts/UserProvider/useUser'

export const useAuctionPage = () => {
  const { user } = useUser()

  const {
    auctionFragment,
    setAuctionFragment,
    findLotByName,
    searchValue,
    setSearchValue,
    isLoadingByeLots,
    isFragment,
    isCanNewFetchGetByeLots,
  } = useAuction()

  return {
    auctionFragment,
    setAuctionFragment,
    isFragment,
    findLotByName,
    money: user.money,
    searchValue,
    setSearchValue,
    isLoadingByeLots,
    isCanNewFetchGetByeLots,
  }
}
