import { useEffect, useRef } from 'react'

import type { useItemHoverDescriptionProps } from 'src/components/ItemHoverDescription/types'

export const useItemHoverDescription = ({
  topSlotIcon,
  leftSlotIcon,
  heightSlotIcon,
  isVisible,
}: useItemHoverDescriptionProps) => {
  const itemHoverDescriptionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isVisible) return

    if (!itemHoverDescriptionRef?.current) return

    const tooltipRect = itemHoverDescriptionRef.current.getBoundingClientRect()
    const tooltipWidth = tooltipRect.width
    const tooltipHeight = tooltipRect.height

    let tooltipTop = topSlotIcon + heightSlotIcon + 10
    let tooltipLeft = leftSlotIcon

    if (tooltipTop + tooltipHeight > window.innerHeight) {
      tooltipTop = topSlotIcon - tooltipHeight - 10
    }

    if (tooltipLeft + tooltipWidth > window.innerWidth) {
      tooltipLeft = window.innerWidth - tooltipWidth - 10
    }

    itemHoverDescriptionRef.current.style.top = `${tooltipTop}px`
    itemHoverDescriptionRef.current.style.left = `${tooltipLeft}px`
    itemHoverDescriptionRef.current.style.opacity = '1'
    itemHoverDescriptionRef.current.style.padding = '12px'

    return () => {
      itemHoverDescriptionRef!.current!.style.opacity = '0'
      itemHoverDescriptionRef!.current!.style.padding = '0px'
    }
  }, [isVisible, topSlotIcon, leftSlotIcon, heightSlotIcon])

  return { itemHoverDescriptionRef }
}
