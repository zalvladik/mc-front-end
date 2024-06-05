import { FETCH_URL_IMG } from 'src/constants'

import SearchInput from 'src/components/inputs/SearchInput'
import {
  Container,
  HeaderInventory,
  InventoryEmpty,
  InventoryWrapper,
  ItemAmount,
  ItemIcon,
  ItemList,
  SearchInputWrapper,
} from 'src/components/UserInventory/styles'
import { useUserInventory } from 'src/components/UserInventory/useUserInventory'

import ItemCategoryFilter from 'src/features/ItemCategoryFilter'
import ItemTicket from 'src/features/ItemTicket'
import ShulkerIndicator from 'src/features/ShulkerIndicator'

import InventoryHeader from '../InventoryHeader'
import ItemCard from '../ItemCard'

const UserInventory = (): JSX.Element => {
  const {
    itemTicketData,
    styleForItemBorder,
    items,
    selectToogle,
    setSearch,
    itemCategoryFilterProps,
    inventoryHeaderProps,
    isLoading,
    search,
    selectedItemsLength,
  } = useUserInventory()

  return (
    <InventoryWrapper>
      <HeaderInventory>
        <SearchInputWrapper>
          <SearchInput
            style={{ zIndex: 2, position: 'absolute', right: 0, bottom: 0 }}
            placeholder="Пошук"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <ShulkerIndicator value={selectedItemsLength} />
        </SearchInputWrapper>
      </HeaderInventory>
      <Container>
        <InventoryHeader {...inventoryHeaderProps}>
          <ItemCategoryFilter {...itemCategoryFilterProps} />
        </InventoryHeader>
        {!isLoading &&
          (items.length ? (
            <ItemList className="scroll-y">
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
            </ItemList>
          ) : (
            <InventoryEmpty>Інвентар пустий</InventoryEmpty>
          ))}
      </Container>
      <ItemTicket ticketId={itemTicketData?.id} />
    </InventoryWrapper>
  )
}

export default UserInventory
