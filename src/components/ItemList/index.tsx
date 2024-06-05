import { FETCH_URL_IMG } from 'src/constants'

import {
  Container,
  InventoryEmpty,
  ItemAmount,
  ItemIcon,
} from 'src/components/ItemList/styles'

import type { ItemListProps } from './types'

import ItemCard from '../ItemCard'

const ItemList = ({
  items,
  isLoading,
  selectToogle,
  styleForItemBorder,
}: ItemListProps): JSX.Element => {
  if (isLoading) return <InventoryEmpty>Інвентар пустий</InventoryEmpty>

  return items.length ? (
    <Container className="scroll-y">
      {items.map(({ amount, id, display_name, type, description }) => (
        <button
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
