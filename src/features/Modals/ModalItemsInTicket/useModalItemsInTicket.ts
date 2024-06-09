import { useCallback, useState } from 'react'
import { SelectAreaColors } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { filterItems } from 'src/helpers/filterItems'
import { useDeleteItemTicket } from 'src/hooks/useDeleteItemTicket'
import { useGetItemsFromTicket } from 'src/hooks/useGetItemsFromTicket'
import { useRemoveItemsFromTicket } from 'src/hooks/useRemoveItemsFromTicket'

export const useModalItemsInTicket = (itemTicketId: number) => {
  const { onClose } = useModals()

  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [selectedCaterogies, setSelectedCaterogies] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const { isLoading, data = [] } = useGetItemsFromTicket(itemTicketId)

  const { mutate } = useRemoveItemsFromTicket(itemTicketId, selectedItems)
  const { mutate: deleteTicket } = useDeleteItemTicket(
    itemTicketId,
    selectedItems.length ? selectedItems : data.map(item => item.id),
  )

  const deleteItemTicket = () => {
    deleteTicket()
    onClose()
  }

  const submitButton = () => {
    if (!selectedItems.length) return

    if (selectedItems.length === data.length) {
      deleteTicket()
      onClose()

      return
    }

    mutate()
    setSelectedItems([])
  }

  const selectToogleArrayFilter = (value: number[]): number[] => {
    if (!selectedItems.length) return [...value]

    const oldIds = selectedItems.filter(itemId => value.includes(itemId))

    if (!oldIds.length) return [...selectedItems, ...value]

    const newIdsArray = Array.from(new Set([...value, ...selectedItems]))

    return newIdsArray.filter(itemId => !oldIds.includes(itemId))
  }

  const selectToogle = useCallback(
    (value: number | number[]) => {
      if (Array.isArray(value)) {
        const itemsIds27count = selectToogleArrayFilter(value).slice(0, 27)

        setSelectedItems(itemsIds27count)
      }

      if (typeof value === 'number') {
        if (selectedItems.length >= 27) {
          const isSelected = selectedItems.find(item => item === value)

          if (isSelected) {
            setSelectedItems(selectedItems.filter(item => item !== value))
          }

          return
        }

        const isSelected = selectedItems.find(item => item === value)

        if (!isSelected) {
          setSelectedItems([...selectedItems, value])

          return
        }

        setSelectedItems(selectedItems.filter(item => item !== value))
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
    items: filterItems({ items: data, searchValue: search, selectedCaterogies }),
    selectToogle,
    styleForItemBorder,
    selectAreaColor: SelectAreaColors.Red,
  }

  return {
    onClose,
    isLoading,
    data,
    inventoryHeaderProps,
    itemCategoryFilterProps,
    itemListProps,
    setSearch,
    deleteItemTicket,
  }
}
