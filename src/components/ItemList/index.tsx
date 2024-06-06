import { FETCH_URL_IMG } from 'src/constants'

import ItemCard from 'src/components/ItemCard'
import {
  AreaSelect,
  Container,
  InventoryEmpty,
  ItemAmount,
  ItemIcon,
  ItemMiddleware,
} from 'src/components/ItemList/styles'
import { useAreaSelect } from 'src/components/ItemList/useAreaSelect'

import type { ItemListProps } from './types'

const ItemList = ({
  items,
  isLoading,
  selectToogle,
  styleForItemBorder,
  selectAreaColor,
}: ItemListProps): JSX.Element => {
  const {
    areaSelectRef,
    containerRef,
    itemMiddlewareRef,
    setIsMouseInside,
    areaSelectStyle,
  } = useAreaSelect({ selectToogle, selectAreaColor })

  if (isLoading) return <InventoryEmpty>Інвентар пустий</InventoryEmpty>

  return items.length ? (
    <Container
      ref={containerRef}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
      className="scroll-y"
    >
      <AreaSelect ref={areaSelectRef} style={areaSelectStyle} />
      <ItemMiddleware ref={itemMiddlewareRef} />
      {items.map(({ amount, id, display_name, type, description }) => (
        <button
          id={`${id}`}
          key={id}
          onClick={() => selectToogle(id)}
          style={styleForItemBorder(id)}
        >
          <ItemIcon
            style={{
              backgroundImage: `url(${FETCH_URL_IMG}/${type.slice(0, 2)}/${type}.png)`,
            }}
          />
          {amount > 1 && <ItemAmount>{amount}</ItemAmount>}
          <ItemCard description={description} title={display_name} />
        </button>
      ))}
    </Container>
  ) : (
    <InventoryEmpty>Інвентар пустий</InventoryEmpty>
  )
}

export default ItemList
