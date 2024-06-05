import { useState } from 'react'
import { useCreateItemTicket } from 'src/hooks/useCreateItemTicket'
import { useGetItemsFromUserInventory } from 'src/hooks/useGetItemsFromUserInventory'

export const useUserInventory = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [selectedCaterogies, setSelectedCaterogies] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const {
    data = [],
    isLoading,
    refetch,
    isRefetching,
  } = useGetItemsFromUserInventory()

  const { data: itemTicketData, mutate } = useCreateItemTicket()

  const putItemsFromInventory = () => {
    if (!selectedItems.length) return

    if (selectedItems.length > 27) return

    mutate(selectedItems)
    setSelectedItems([])
  }

  const selectToogle = (id: number) => {
    if (selectedItems.length >= 27) {
      const isSelected = selectedItems.find(item => item === id)

      if (isSelected) {
        setSelectedItems(selectedItems.filter(item => item !== id))
      }

      return
    }

    const isSelected = selectedItems.find(item => item === id)

    if (!isSelected) {
      setSelectedItems([...selectedItems, id])

      return
    }

    setSelectedItems(selectedItems.filter(item => item !== id))
  }

  const styleForItemBorder = (id: number) => {
    return {
      backgroundImage: selectedItems.find(item => item === id)
        ? 'url(/assets/slot_green.png)'
        : 'url(/assets/slot.png)',
    }
  }

  const inventoryHeaderProps = {
    isLoadingGetInventory: isLoading || isRefetching,
    itemLength: data.length,
    refetch,
    putItemsFromInventory,
  }

  const itemCategoryFilterProps = {
    setSelectedCaterogies,
    selectedCaterogies,
  }

  const filteredItems = () => {
    const searchedItems = data.filter(item => {
      const type = item.type.toLowerCase()
      const value = search.toLowerCase()

      return type.includes(value) || item.display_name.toLowerCase().includes(value)
    })

    if (!selectedCaterogies.length) return searchedItems

    return searchedItems.filter(({ categories }) => {
      return categories.find(category => !!selectedCaterogies.includes(category))
    })
  }

  return {
    itemTicketData,
    styleForItemBorder,
    items: filteredItems(),
    selectToogle,
    setSearch,
    itemCategoryFilterProps,
    inventoryHeaderProps,
    isLoading,
    search,
    selectedItemsLength: selectedItems.length,
  }
}
