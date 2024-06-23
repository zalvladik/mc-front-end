import type { ItemT } from 'src/services/api/Items/types'

export type FilteredItemsProps = {
  items: ItemT[]
  searchValue: string
  selectedCaterogies: string[]
}
