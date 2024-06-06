import type { ItemT } from 'src/services/api/UserInventory/types'

export type FilteredItemsProps = {
  items: ItemT[]
  searchValue: string
  selectedCaterogies: string[]
}
