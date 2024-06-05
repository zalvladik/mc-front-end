import SearchInput from 'src/components/inputs/SearchInput'
import InventoryHeader from 'src/components/InventoryHeader'
import ItemList from 'src/components/ItemList'
import {
  Container,
  InventoryWrapper,
  SearchInputWrapper,
} from 'src/components/UserInventory/styles'
import { useUserInventory } from 'src/components/UserInventory/useUserInventory'

import ItemCategoryFilter from 'src/features/ItemCategoryFilter'
import ItemTicket from 'src/features/ItemTicket'
import ShulkerIndicator from 'src/features/ShulkerIndicator'

const UserInventory = (): JSX.Element => {
  const {
    itemTicketData,
    listItemProps,
    setSearch,
    itemCategoryFilterProps,
    inventoryHeaderProps,
    search,
    selectedItemsLength,
  } = useUserInventory()

  return (
    <InventoryWrapper>
      <SearchInputWrapper>
        <SearchInput
          style={{ zIndex: 2, position: 'absolute', right: 0, bottom: 0 }}
          placeholder="Пошук"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <ShulkerIndicator value={selectedItemsLength} />
      </SearchInputWrapper>
      <Container>
        <InventoryHeader {...inventoryHeaderProps}>
          <ItemCategoryFilter {...itemCategoryFilterProps} />
        </InventoryHeader>
        <ItemList {...listItemProps} />
      </Container>
      <ItemTicket ticketId={itemTicketData?.id} />
    </InventoryWrapper>
  )
}

export default UserInventory
