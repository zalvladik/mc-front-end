import { AuctionFragment } from 'src/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useItemHoverDescription } from 'src/contexts/ItemHoverDescriptionProvider/useItemHoverDescription'

export const useAuctionController = () => {
  const {
    auctionFragment,
    enchantSearchParams,
    setAuctionFragment,
    setEnchantSearchParams,
  } = useAuction()

  const { offVisible } = useItemHoverDescription()

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
    enchantSearchParams,
    setEnchantSearchParams,
    offVisible,
  }
}
