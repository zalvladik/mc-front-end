import { useCallback, useState } from 'react'
import { SelectAreaColors } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { filterItems } from 'src/helpers/filterItems'
import { useGetItemsFromTicket } from 'src/hooks/useGetItemsFromTicket'
import { useRemoveItemsFromTicket } from 'src/hooks/useRemoveItemsFromTicket'

export const useModalItemsInTicket = (itemTicketId: number) => {
  const { onClose } = useModals()

  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [selectedCaterogies, setSelectedCaterogies] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const { mutate } = useRemoveItemsFromTicket(itemTicketId, selectedItems)

  const { isLoading, data = [] } = useGetItemsFromTicket(itemTicketId)

  const submitButton = () => {
    if (!selectedItems.length) return

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
        ? 'url(/assets/slot_red.png)'
        : 'url(/assets/slot.png)',
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
    isLoading,
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
  }
}
