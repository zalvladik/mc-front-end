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

  const {
    data: itemTicketData,
    mutate,
    isLoading: isLoadingItemTicket,
  } = useCreateItemTicket()

  const submitButton = () => {
    if (!selectedItems.length || selectedItems.length > 27) return

    mutate(selectedItems)
    setSelectedItems([])
  }

  const filterByCaterogies = (categories: string[]): void => {
    setSelectedCaterogies(categories)
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
      backgroundImage: selectedItems.find(item => Number(item) === Number(id))
        ? 'url(/assets/items_for_ui/slot_green.png)'
        : 'url(/assets/items_for_ui/slot.png)',
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

  if (!setPage.length) setPage(page - 1)

  const searchFilter = (value: string) => {
    setSearchValue(value)

    if (maxPage === 1) return

    if (page > 1) setPage(1)
  }

  const inventoryHeaderProps = {
    isLoading: isLoading || isRefetching || isLoadingItemTicket,
    itemLength: data.length,
    refetch,
    submitButton,
    title: 'Інвентар',
    buttonText: 'Забрати',
    itemsLength: selectedItems.length,
  }

  const itemCategoryFilterProps = {
    setSelectedCaterogies: filterByCaterogies,
    selectedCaterogies,
  }

  const itemListProps = {
    items: itemsOnPage,
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
