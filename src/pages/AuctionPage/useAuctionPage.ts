import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useUser } from 'src/contexts/UserProvider/useUser'

export const useAuctionPage = () => {
  const { user } = useUser()

  const {
    auctionFragment,
    setAuctionFragment,
    mutateByeLotsHandleButton,
    searchValue,
    setSearchValue,
    isLoadingByeLots,
    isFragment,
    isCanNewFetchGetByeLots,
    isCanNewFetchGetEnchantItems,
    mutateEnchantLotsHandleButton,
  } = useAuction()

  return {
    auctionFragment,
    setAuctionFragment,
    isFragment,
    mutateByeLotsHandleButton,
    money: user.money,
    searchValue,
    setSearchValue,
    isLoadingByeLots,
    isCanNewFetchGetByeLots,
    isCanNewFetchGetEnchantItems,
    mutateEnchantLotsHandleButton,
  }
}
