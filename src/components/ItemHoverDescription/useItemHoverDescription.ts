import { useEffect, useRef } from 'react'

import type { useItemHoverDescriptionProps } from 'src/components/ItemHoverDescription/types'

export const useItemHoverDescription = ({
  topSlotIcon = 0,
  leftSlotIcon = 0,
  heightSlotIcon = 0,
  widthSlotIcon = 0,
  isVisible,
}: useItemHoverDescriptionProps) => {
  const itemHoverDescriptionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isVisible) return

    if (!itemHoverDescriptionRef?.current) return

    const tooltipRect = itemHoverDescriptionRef.current.getBoundingClientRect()
    const tooltipWidth = tooltipRect.width
    const tooltipHeight = tooltipRect.height

    let tooltipTop = topSlotIcon + heightSlotIcon
    let tooltipLeft = leftSlotIcon + widthSlotIcon

    if (tooltipTop + tooltipHeight > window.innerHeight) {
      tooltipTop = topSlotIcon - tooltipHeight - 40
    }

    if (tooltipLeft + tooltipWidth > window.innerWidth) {
      tooltipLeft = window.innerWidth - tooltipWidth - 40
    }

    itemHoverDescriptionRef.current.style.top = `${tooltipTop}px`
    itemHoverDescriptionRef.current.style.left = `${tooltipLeft}px`
    itemHoverDescriptionRef.current.style.opacity = '1'
    itemHoverDescriptionRef.current.style.padding = '12px'

    return () => {
      itemHoverDescriptionRef!.current!.style.opacity = '0'
      itemHoverDescriptionRef!.current!.style.padding = '0px'
    }
  }, [isVisible, topSlotIcon, leftSlotIcon, heightSlotIcon, widthSlotIcon])

  return { itemHoverDescriptionRef }
}
