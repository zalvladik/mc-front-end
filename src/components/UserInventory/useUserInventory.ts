import { useCallback, useState } from 'react'
import { useQueryClient } from 'react-query'
import { CacheKeys, SelectAreaColors } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { filterItems } from 'src/helpers/filterItems'
import { useCreateItemTicket } from 'src/hooks/useCreateItemTicket'
import { useGetItemsFromUserInventory } from 'src/hooks/useGetItemsFromUserInventory'
import type { ItemTicketT } from 'src/services/api/UserInventory/types'

export const useUserInventory = () => {
  const queryClient = useQueryClient()
  const toast = useToast()

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

    const data: ItemTicketT[] =
      queryClient.getQueryData(CacheKeys.USER_INVENTORY_ITEM_TICKETS) ?? []

    if (data.length >= 5) {
      toast.error({
        message: ['У вас може бути', 'тільки 5 квитків'],
        height: 20,
        width: -50,
      })

      return
    }

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

  if (!itemsOnPage.length && items.length) setPage(page - 1)

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
    isLoading: isLoading || isRefetching,
    items: itemsOnPage,
    selectToogle,
    styleForItemBorder,
    selectAreaColor: SelectAreaColors.Green,
    itemSlotIconProps: { containerSize: 104, itemSize: 64 },
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
