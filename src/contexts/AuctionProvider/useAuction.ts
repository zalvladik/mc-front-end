import { useContext } from 'react'
import { AuctionContext } from 'src/contexts'
import type { AuctionContextDataT } from 'src/contexts/AuctionProvider/types'

export const useAuction = (): AuctionContextDataT => {
  const data = useContext(AuctionContext)

  if (!data) {
    throw new Error('useAuction was used outside of its Provider')
  }

  return data
}
