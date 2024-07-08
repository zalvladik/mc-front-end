import { AuctionFragment } from 'src/constants'
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
  } = useAuction()

  const isFragment = {
    isBuyFragment: AuctionFragment.BUY_LOT === auctionFragment,
    isCreateLotFragment: AuctionFragment.CREATE_LOT === auctionFragment,
    isUserLotsFragment: AuctionFragment.USER_LOTS === auctionFragment,
  }

  return {
    auctionFragment,
    setAuctionFragment,
    isFragment,
    findLotByName,
    money: user.money,
    searchValue,
    setSearchValue,
    isLoadingByeLots,
  }
}
