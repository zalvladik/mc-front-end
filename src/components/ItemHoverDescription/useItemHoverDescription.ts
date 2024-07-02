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

    const { style } = itemHoverDescriptionRef.current

    style.top = `${tooltipTop}px`
    style.left = `${tooltipLeft}px`
    style.opacity = '1'
    style.padding = '12px'
    style.border = '3px solid rgba(30, 2, 69, 1)'

    return () => {
      const { style } = itemHoverDescriptionRef!.current!
      style.opacity = '0'
      style.padding = '0px'
      style.border = 'none'
    }
  }, [isVisible, topSlotIcon, leftSlotIcon, heightSlotIcon, widthSlotIcon])

  return { itemHoverDescriptionRef }
}
