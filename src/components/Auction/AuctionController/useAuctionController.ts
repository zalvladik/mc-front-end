import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

export const useAuctionController = () => {
  const { auctionFragment, setAuctionFragment } = useAuction()

  const buttonsTexts = [
    { fragment: AuctionFragment.BUY_LOTS, text: 'Купити лот' },
    { fragment: AuctionFragment.USER_LOTS, text: 'Ваші лоти' },
    { fragment: AuctionFragment.CREATE_LOTS, text: 'Створити лот' },
    { fragment: AuctionFragment.ENCHANT_LOTS, text: 'Зачарування' },
  ]

  return {
    buttonsTexts,
    auctionFragment,
    setAuctionFragment,
  }
}
