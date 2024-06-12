import { useState } from 'react'
import { AuctionFragment } from 'src/constants'

export const useAuctionPage = () => {
  const [currentFragment, setCurrentFragment] = useState<AuctionFragment>(
    AuctionFragment.BUY_LOT,
  )

  const isFragment = {
    isBuyFragment: AuctionFragment.BUY_LOT === currentFragment,
    isCreateLotFragment: AuctionFragment.CREATE_LOT === currentFragment,
  }

  const auctionControllerProps = { currentFragment, setCurrentFragment }

  return {
    currentFragment,
    setCurrentFragment,
    isFragment,
    auctionControllerProps,
  }
}
