import { useState } from 'react'
import { AuctionFragment } from 'src/constants'

export const useAuctionPage = () => {
  const [currentFragment, setCurrentFragment] = useState<AuctionFragment>(
    AuctionFragment.BUY_LOT,
  )

  const isBuyFragment = AuctionFragment.BUY_LOT === currentFragment

  const auctionControllerProps = { currentFragment, setCurrentFragment }

  return {
    currentFragment,
    setCurrentFragment,
    isBuyFragment,
    auctionControllerProps,
  }
}
