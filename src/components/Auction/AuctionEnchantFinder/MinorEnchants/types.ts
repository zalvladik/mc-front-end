import type { HTMLProps } from 'react'
import type { EnchantsWithMaxLvlT } from 'src/contexts/AuctionProvider/types'
import type { CSSProperties } from 'styled-components'

import type { EnchantsEnum } from 'src/components/Auction/AuctionEnchantFinder/constants'

export type MinorEnchantsProps = {
  item: EnchantsEnum[]
  textStyle: CSSProperties
  selectedEnchants: EnchantsWithMaxLvlT
  setSelectedMinorEnchantsToggle: (
    value1: EnchantsEnum,
    value2?: EnchantsEnum,
  ) => void
} & HTMLProps<HTMLDivElement>
