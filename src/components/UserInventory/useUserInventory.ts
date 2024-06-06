import { useCallback, useState } from 'react'
import { SelectAreaColors } from 'src/constants'
import { filterItems } from 'src/helpers/filterItems'
import { useCreateItemTicket } from 'src/hooks/useCreateItemTicket'
import { useGetItemsFromUserInventory } from 'src/hooks/useGetItemsFromUserInventory'

export const useUserInventory = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [selectedCaterogies, setSelectedCaterogies] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState('')

  const [page, setPage] = useState(1)

  const {
    data = [],
    isLoading,
    refetch,
    isRefetching,
  } = useGetItemsFromUserInventory()

  const { data: itemTicketData, mutate } = useCreateItemTicket()

  const submitButton = () => {
    if (!selectedItems.length || selectedItems.length > 27) return

    mutate(selectedItems)
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
      backgroundImage: selectedItems.find(item => Number(item) === Number(id))
        ? 'url(/assets/slot_green.png)'
        : 'url(/assets/slot.png)',
    }
  }

  const items = filterItems({ items: data, searchValue, selectedCaterogies })

  const maxPage = Math.ceil(items.length / 27)

  const getItemsForPage = () => {
    const firstItemInPage = 27 * (page - 1)
    const lastItemInPage = firstItemInPage + 27

    return items.slice(firstItemInPage, lastItemInPage)
  }

  const itemsOnPage = getItemsForPage()

  const searchFilter = (value: string) => {
    setSearchValue(value)

    if (maxPage === 1) return

    if (page > 1) setPage(1)
  }

  const inventoryHeaderProps = {
    isLoading: isLoading || isRefetching,
    itemLength: data.length,
    refetch,
    submitButton,
    title: 'Інвентар',
    buttonText: 'Забрати',
    itemsLength: selectedItems.length,
  }

  const itemCategoryFilterProps = {
    setSelectedCaterogies,
    selectedCaterogies,
  }

  const itemListProps = {
    items: itemsOnPage,
    isLoading,
    selectToogle,
    styleForItemBorder,
    selectAreaColor: SelectAreaColors.Green,
  }

  const paginationTabProps = {
    page,
    setPage,
    maxPage,
  }

  return {
    searchFilter,
    paginationTabProps,
    itemTicketData,
    inventoryHeaderProps,
    itemCategoryFilterProps,
    itemListProps,
    searchValue,
    selectedItemsLength: selectedItems.length,
  }
}
