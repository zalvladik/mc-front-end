import { useState } from 'react'

import ItemHoverDescription from 'src/components/ItemHoverDescription'
import type { ItemHoverDescriptionProps } from 'src/components/ItemHoverDescription/types'
import {
  AreaSelect,
  Container,
  EmptySlot,
  ItemMiddleware,
} from 'src/components/ItemList/styles'
import type { ItemListProps } from 'src/components/ItemList/types'
import { UseItemList } from 'src/components/ItemList/useItemList'
import ItemSlotIcon from 'src/components/ItemSlotIcon'
import Skeleton from 'src/components/Skeleton'

const ItemList = ({
  items,
  selectToogle,
  styleForItemBorder,
  selectAreaColor,
  isNeedAreaSelect = true,
  isLoading,
  itemSlotIconProps,
  ...props
}: ItemListProps): JSX.Element => {
  const {
    areaSelectRef,
    containerRef,
    itemMiddlewareRef,
    setIsMouseInside,
    areaSelectStyle,
  } = UseItemList({ selectToogle, selectAreaColor, isNeedAreaSelect })

  const [HoverDescriptionProps, setHoverDescriptionProps] =
    useState<ItemHoverDescriptionProps>({
      description: [],
      title: '',
      isVisible: false,
    })

  return (
    <Container
      ref={containerRef}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
      {...props}
    >
      <Skeleton
        emptyText="Інвентар пустий"
        isDataExist={items.length}
        isLoading={isLoading}
        size={80}
      >
        <AreaSelect ref={areaSelectRef} style={areaSelectStyle} />
        <ItemMiddleware ref={itemMiddlewareRef} />
        {items.map(item => (
          <ItemSlotIcon
            key={item.id}
            onClick={() => selectToogle([item.id])}
            style={{ ...styleForItemBorder(item.id), margin: 4 }}
            setHoverDescriptionProps={setHoverDescriptionProps}
            {...itemSlotIconProps}
            {...item}
          />
        ))}

        {Array.from({ length: 27 - items.length }).map((_, i) => (
          <EmptySlot key={i} />
        ))}
      </Skeleton>

      <ItemHoverDescription {...HoverDescriptionProps} />
    </Container>
  )
}

export default ItemList
