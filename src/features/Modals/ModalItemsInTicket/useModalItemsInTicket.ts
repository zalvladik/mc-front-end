import { useCallback, useState } from 'react'
import { SelectAreaColors } from 'src/constants'
import { filterItems } from 'src/helpers/filterItems'
import { useDeleteItemTicket } from 'src/hooks/useDeleteItemTicket'
import { useGetItemsFromTicket } from 'src/hooks/useGetItemsFromTicket'
import { useRemoveItemsFromTicket } from 'src/hooks/useRemoveItemsFromTicket'

export const useModalItemsInTicket = (itemTicketId: number) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [selectedCaterogies, setSelectedCaterogies] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const { isLoading, data = [] } = useGetItemsFromTicket(itemTicketId)

  const { mutate, isLoading: isLoadingItemTicket } = useRemoveItemsFromTicket(
    itemTicketId,
    selectedItems,
  )

  const { mutate: deleteTicket, isLoading: isLoadingDeleteItemTicket } =
    useDeleteItemTicket(itemTicketId)

  const deleteItemTicket = () => {
    deleteTicket()
  }

  const submitButton = () => {
    if (!selectedItems.length) return

    if (selectedItems.length === data.length) {
      deleteTicket()

      return
    }

    mutate()
    setSelectedItems([])
  }

  const selectToogle = useCallback(
    (value: number[]) => {
      const selectToogleArrayFilter = (value: number[]): number[] => {
        if (!selectedItems.length) return [...value]

        const oldIds = selectedItems.filter(itemId => value.includes(itemId))

        if (!oldIds.length) return [...selectedItems, ...value]

        const newIdsArray = Array.from(new Set([...value, ...selectedItems]))

        return newIdsArray.filter(itemId => !oldIds.includes(itemId))
      }

      if (Array.isArray(value)) {
        const itemsIds27count = selectToogleArrayFilter(value).slice(0, 27)

        setSelectedItems(itemsIds27count)
      }
    },
    [selectedItems],
  )

  const styleForItemBorder = (id: number) => {
    return {
      backgroundImage: selectedItems.find(item => item === id)
        ? 'url(/assets/items_for_ui/slot_red.png)'
        : 'url(/assets/items_for_ui/slot.png)',
    }
  }

  const inventoryHeaderProps = {
    isLoading: isLoading || isLoadingItemTicket || isLoadingDeleteItemTicket,
    itemLength: data.length,
    buttonText: 'Видалити',
    title: `Квиток ${itemTicketId}`,
    submitButton,
    itemsLength: selectedItems.length,
  }

  const itemCategoryFilterProps = {
    setSelectedCaterogies,
    selectedCaterogies,
  }

  const itemListProps = {
    isLoading,
    items: filterItems({ items: data, searchValue: search, selectedCaterogies }),
    selectToogle,
    styleForItemBorder,
    selectAreaColor: SelectAreaColors.Red,
    itemSlotIconProps: { containerSize: 104, itemSize: 64 },
  }

  return {
    data,
    inventoryHeaderProps,
    itemCategoryFilterProps,
    itemListProps,
    setSearch,
    deleteItemTicket,
    isLoadingDeleteItemTicket:
      isLoading || isLoadingItemTicket || isLoadingDeleteItemTicket,
  }
}
