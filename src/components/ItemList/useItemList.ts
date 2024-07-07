import { useEffect, useRef, useState } from 'react'
import { SelectAreaColors } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'

import type { CoordsProps, UseItemListProps } from 'src/components/ItemList/types'

import { Modals } from 'src/features/Modals/constants'

export const UseItemList = ({
  selectToogle,
  selectAreaColor,
  isNeedAreaSelect,
}: UseItemListProps) => {
  const { onOpen } = useModals()
  const containerRef = useRef<HTMLDivElement>(null)
  const areaSelectRef = useRef<HTMLDivElement>(null)
  const itemMiddlewareRef = useRef<HTMLDivElement>(null)

  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const [containerRect, setContainerRect] = useState<DOMRect | null>(null)
  const [startCoords, setStartCoords] = useState<CoordsProps | null>(null)
  const [isMouseInside, setIsMouseInside] = useState(false)

  const [isDrawing, setIsDrawing] = useState(false)

  const openShulkerModal = (shulkerId: number) => {
    if (selectedItem !== shulkerId) {
      return setSelectedItem(shulkerId)
    }

    onOpen({ name: Modals.SHULKER_ITEMS, data: { shulkerId } })
  }

  const setDivSize = (cords: CoordsProps) => {
    if (!areaSelectRef.current || !startCoords) return

    const startX = startCoords.x
    const startY = startCoords.y

    let width = cords.x - startX
    let height = cords.y - startY

    let left = startX
    let top = startY

    if (width < 0) {
      left = cords.x
      width = startX - cords.x
    }

    if (height < 0) {
      top = cords.y
      height = startY - cords.y
    }

    areaSelectRef.current.style.left = `${left}px`
    areaSelectRef.current.style.top = `${top}px`
    areaSelectRef.current.style.width = `${width}px`
    areaSelectRef.current.style.height = `${height}px`
  }

  const setDivCords = (cords: CoordsProps) => {
    if (!areaSelectRef.current) return

    areaSelectRef.current.style.left = `${cords.x}px`
    areaSelectRef.current.style.top = `${cords.y}px`
  }

  useEffect(() => {
    if (!isNeedAreaSelect || !selectToogle) return () => {}

    if (!isMouseInside && areaSelectRef.current && itemMiddlewareRef.current) {
      areaSelectRef.current.style.width = `0px`
      areaSelectRef.current.style.height = `0px`

      itemMiddlewareRef.current.style.display = 'none'
      areaSelectRef.current.style.display = 'none'
    }

    const onDblClick = (e: MouseEvent) => {
      if (!containerRect || !areaSelectRef.current || !itemMiddlewareRef.current)
        return

      itemMiddlewareRef.current.style.display = 'flex'
      areaSelectRef.current.style.display = 'flex'

      const x = e.clientX - containerRect.left
      const y = e.clientY - containerRect.top

      areaSelectRef.current.style.width = `0px`
      areaSelectRef.current.style.height = `0px`

      setStartCoords({ x, y })
      setDivCords({ x, y })
      setIsDrawing(true)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDrawing || !containerRect) return

      if (!isMouseInside) return

      const x = e.clientX - containerRect.left
      const y = e.clientY - containerRect.top
      setDivSize({ x, y })
    }

    const onMouseUp = () => {
      const itemIds = []

      const container = containerRef.current

      if (!container) return

      const rect = container.getBoundingClientRect()
      setContainerRect(rect)

      if (containerRect && areaSelectRef.current && itemMiddlewareRef.current) {
        itemMiddlewareRef.current.style.display = 'none'

        const container = containerRef.current

        const areaSelectRect = areaSelectRef.current.getBoundingClientRect()

        if (container) {
          const { children } = container
          for (let i = 0; i < children.length; i += 1) {
            const child = children[i]

            if (child.nodeName !== 'DIV') continue

            if (!child.id) continue

            const childRect = child.getBoundingClientRect()

            // const overlapLeft = Math.max(childRect.left, areaSelectRect.left)
            // const overlapRight = Math.min(childRect.right, areaSelectRect.right)
            // const overlapTop = Math.max(childRect.top, areaSelectRect.top)
            // const overlapBottom = Math.min(childRect.bottom, areaSelectRect.bottom)

            // const overlapArea =
            //   Math.max(0, overlapRight - overlapLeft) *
            //   Math.max(0, overlapBottom - overlapTop)

            // const buttonArea = childRect.width * childRect.height

            // const overlapPercentage = (overlapArea / buttonArea) * 100

            // if (overlapPercentage >= 20) itemIds.push(Number(child.id))
            const isOverlap =
              areaSelectRect.left < childRect.right &&
              areaSelectRect.right > childRect.left &&
              areaSelectRect.top < childRect.bottom &&
              areaSelectRect.bottom > childRect.top

            if (isOverlap) itemIds.push(Number(child.id))
          }
        }

        areaSelectRef.current.style.display = 'none'
      }

      if (itemIds.length > 0) selectToogle(itemIds)

      setIsDrawing(false)
    }

    document.addEventListener('dblclick', onDblClick)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('dblclick', onDblClick)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [containerRect, isDrawing, startCoords, isMouseInside, selectToogle])

  const isGreen = selectAreaColor === SelectAreaColors.Green

  const areaSelectStyle = {
    backgroundColor: isGreen ? 'rgba(0, 200, 0, 0.12)' : 'rgba(200, 0, 0, 0.15)',
    border: isGreen
      ? '2px solid rgba(50, 200, 0, 0.8)'
      : '2px solid rgba(200, 0, 0, 0.8)',
  }

  return {
    containerRef,
    areaSelectRef,
    itemMiddlewareRef,
    setIsMouseInside,
    areaSelectStyle,
    openShulkerModal,
    setSelectedItem,
  }
}
