import { AuctionFragment } from 'src/constants'

export const useAuctionController = () => {
  const buttonsTexts = [
    { fragment: AuctionFragment.BUY_LOT, text: 'Купити лот' },
    { fragment: AuctionFragment.USER_LOTS, text: 'Ваші лоти' },
    { fragment: AuctionFragment.CREATE_LOT, text: 'Створити лот' },
  ]

  return { buttonsTexts }
}
