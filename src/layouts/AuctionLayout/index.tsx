import { lazy } from 'react'

import AuctionProvider from 'src/contexts/AuctionProvider'

const AuctionPage = lazy(() => import('src/pages/AuctionPage'))

const AuctionLayout = (): JSX.Element | null => {
  return (
    <AuctionProvider>
      <AuctionPage />
    </AuctionProvider>
  )
}

export default AuctionLayout
