import type { ItemT } from 'src/services/api/Items/types'
import type { ShulkerT } from 'src/services/api/Shulker/types'

export type FilteredItemsProps = {
  items: (ItemT | ShulkerT)[]
  searchValue: string
  selectedCaterogies: string[]
}
