import type { FilteredItemsProps } from 'src/helpers/filterItems/types'
import type { ItemT } from 'src/services/api/Items/types'

export const filterItems = ({
  items,
  searchValue,
  selectedCaterogies,
}: FilteredItemsProps): ItemT[] => {
  const sortedById = items.sort((a, b) => {
    return a.id - b.id
  })

  const searchedItems = sortedById.filter(item => {
    const type = item.type.toLowerCase()
    const value = searchValue.toLowerCase()

    return type.includes(value) || item.display_name.toLowerCase().includes(value)
  })

  if (!selectedCaterogies.length) return searchedItems

  const sorteredByCategory = searchedItems.filter(({ categories }) => {
    return categories.find(category => !!selectedCaterogies.includes(category))
  })

  return sorteredByCategory
}
