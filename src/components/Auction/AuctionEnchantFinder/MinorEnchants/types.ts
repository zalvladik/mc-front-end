import type { HTMLProps } from 'react'
import type { CSSProperties } from 'styled-components'

import type { EnchantsEnum } from 'src/components/Auction/AuctionEnchantFinder/constants'

export type MinorEnchantsProps = {
  item: EnchantsEnum[]
  textStyle: CSSProperties
  selectedEnchants: EnchantsEnum[]
  setSelectedMinorEnchantsToggle: (
    value1: EnchantsEnum,
    value2?: EnchantsEnum,
  ) => void
} & HTMLProps<HTMLDivElement>
