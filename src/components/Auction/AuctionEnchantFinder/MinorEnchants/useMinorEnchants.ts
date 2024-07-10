import { useEffect, useRef, useState } from 'react'

import { enchantTranslations } from 'src/components/Auction/AuctionEnchantFinder/constants'

import type { EnchantTranslationsT } from '../types'

export const useMinorEnchants = () => {
  const [selected, setSelected] = useState<boolean>(false)

  const overflowRef = useRef<HTMLDivElement>(null)
  const minorEnchantsRef = useRef<HTMLDivElement>(null)

  const enchantTranslationsTypes: EnchantTranslationsT = enchantTranslations

  useEffect(() => {
    if (overflowRef && minorEnchantsRef) {
      if (overflowRef.current && minorEnchantsRef.current) {
        if (selected) {
          const { height } = minorEnchantsRef.current.getBoundingClientRect()
          overflowRef.current.style.height = `${height}px`
        }

        if (!selected) {
          overflowRef.current.style.height = '0px'
        }
      }
    }
  }, [selected])

  return {
    selected,
    setSelected,
    overflowRef,
    minorEnchantsRef,
    enchantTranslationsTypes,
  }
}
