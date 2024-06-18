import { FETCH_URL_IMG } from 'src/constants'

import ItemCard from 'src/components/ItemCard'
import {
  AreaSelect,
  Container,
  EmptySlot,
  ItemAmount,
  ItemButtom,
  ItemIcon,
  ItemMiddleware,
} from 'src/components/ItemList/styles'
import type { ItemListProps } from 'src/components/ItemList/types'
import { UseItemList } from 'src/components/ItemList/useItemList'
import Skeleton from 'src/components/Skeleton'

const ItemList = ({
  items,
  selectToogle,
  styleForItemBorder,
  selectAreaColor,
  isNeedAreaSelect = true,
  isLoading,
  ...props
}: ItemListProps): JSX.Element => {
  const {
    areaSelectRef,
    containerRef,
    itemMiddlewareRef,
    setIsMouseInside,
    areaSelectStyle,
  } = UseItemList({ selectToogle, selectAreaColor, isNeedAreaSelect })

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
        {items.map(({ amount, id, display_name, type, description }) => (
          <ItemButtom
            id={`${id}`}
            key={id}
            onClick={() => selectToogle([id])}
            style={styleForItemBorder(id)}
          >
            <ItemIcon
              style={{
                backgroundImage: `url(${FETCH_URL_IMG}/${type.slice(0, 2)}/${type}.png)`,
              }}
            />
            {amount > 1 && <ItemAmount>{amount}</ItemAmount>}
            <ItemCard description={description} title={display_name} />
          </ItemButtom>
        ))}

        {Array.from({ length: 27 - items.length }).map((_, i) => (
          <EmptySlot key={i} />
        ))}
      </Skeleton>
    </Container>
  )
}

export default ItemList
