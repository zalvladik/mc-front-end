import type { AuctionFragment } from 'src/constants'

export type AuctionControllerProps = {
  currentFragment: AuctionFragment
  setCurrentFragment: (value: AuctionFragment) => void
}
