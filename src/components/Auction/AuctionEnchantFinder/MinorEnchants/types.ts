import type { HTMLProps } from 'react'
import type { EnchantsWithMaxLvlT } from 'src/contexts/AuctionProvider/types'

import type { EnchantsEnum } from 'src/components/Auction/AuctionEnchantFinder/constants'

export type MinorEnchantsProps = {
  item: EnchantsEnum[]
  selectedEnchants: EnchantsWithMaxLvlT
  setEnchantLvl: (value: EnchantsEnum) => void
  setSelectedMinorEnchantsToggle: (
    value1: EnchantsEnum,
    value2?: EnchantsEnum,
  ) => void
} & HTMLProps<HTMLDivElement>
