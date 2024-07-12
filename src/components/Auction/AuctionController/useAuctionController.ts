import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

export const useAuctionController = () => {
  const { auctionFragment, setAuctionFragment } = useAuction()

  const buttonsTexts = [
    { fragment: AuctionFragment.BUY_LOT, text: 'Купити лот' },
    { fragment: AuctionFragment.USER_LOTS, text: 'Ваші лоти' },
    { fragment: AuctionFragment.CREATE_LOT, text: 'Створити лот' },
    { fragment: AuctionFragment.ENCHANT_FINDER, text: 'Зачарування' },
  ]

  return {
    buttonsTexts,
    auctionFragment,
    setAuctionFragment,
  }
}
