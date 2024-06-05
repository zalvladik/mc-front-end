import type { InventoryHeaderProps } from 'src/components/InventoryHeader/types'
import type { ItemListProps } from 'src/components/ItemList/types'

import type { ItemCategoryFilterProps } from 'src/features/ItemCategoryFilter/types'
import type { ItemTicketProps } from 'src/features/ItemTicket/types'

export type InventoryProps = {
  itemTicketData: ItemTicketProps
  inventoryHeaderProps: InventoryHeaderProps
  itemCategoryFilterProps: ItemCategoryFilterProps
} & ItemListProps
