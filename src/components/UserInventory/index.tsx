import DefaultInput from 'src/components/inputs/DefaultInput'
import InventoryHeader from 'src/components/InventoryHeader'
import ItemList from 'src/components/ItemList'
import {
  Container,
  DefaultInputWrapper,
  InventoryWrapper,
} from 'src/components/UserInventory/styles'
import { useUserInventory } from 'src/components/UserInventory/useUserInventory'

import ItemCategoryFilter from 'src/features/ItemCategoryFilter'
import ItemTicket from 'src/features/ItemTicket'
import PaginationTab from 'src/features/PaginationTab'
import ShulkerIndicator from 'src/features/ShulkerIndicator'

const UserInventory = (): JSX.Element => {
  const {
    itemTicketData,
    searchFilter,
    searchValue,
    selectedItemsLength,
    itemCategoryFilterProps,
    inventoryHeaderProps,
    paginationTabProps,
    itemListProps,
  } = useUserInventory()

  return (
    <InventoryWrapper>
      <DefaultInputWrapper>
        <DefaultInput
          containerStyle={{ zIndex: 2, position: 'absolute', right: 0, bottom: 0 }}
          rightIconSize={40}
          placeholder="Пошук"
          value={searchValue}
          onChange={e => searchFilter(e.target.value)}
        />
        <ShulkerIndicator value={selectedItemsLength} />
      </DefaultInputWrapper>
      <Container>
        <InventoryHeader {...inventoryHeaderProps}>
          <ItemCategoryFilter {...itemCategoryFilterProps} />
        </InventoryHeader>
        <ItemList {...itemListProps} />
      </Container>
      <ItemTicket ticketId={itemTicketData?.id} />
      <PaginationTab
        style={{
          opacity: paginationTabProps.maxPage > 1 ? 1 : 0,
          pointerEvents: paginationTabProps.maxPage > 1 ? 'auto' : 'none',
        }}
        {...paginationTabProps}
      />
    </InventoryWrapper>
  )
}

export default UserInventory
