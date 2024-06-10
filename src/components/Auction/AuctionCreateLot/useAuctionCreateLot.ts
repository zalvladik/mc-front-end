import { useCallback, useState } from 'react'
import { SelectAreaColors } from 'src/constants'
import { filterItems } from 'src/helpers/filterItems'
import { useGetItemsFromUserInventory } from 'src/hooks/useGetItemsFromUserInventory'

export const useAuctionCreateLot = () => {
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

  const filterByCaterogies = (categories: string[]): void => {
    setSelectedCaterogies(categories)
    setSelectedItems([])
  }

  const selectToogle = useCallback(
    (value: number[]) => {
      if (value[0] === selectedItems[0]) return

      setSelectedItems(value)
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

  const searchFilter = (value: string) => {
    setSearchValue(value)

    if (maxPage === 1) return

    if (page > 1) setPage(1)
  }

  const inventoryHeaderProps = {
    isLoading: isLoading || isRefetching,
    itemLength: data.length,
    refetch,
    title: 'Інвентар',
    buttonText: 'Забрати',
    itemsLength: selectedItems.length,
  }

  const itemCategoryFilterProps = {
    setSelectedCaterogies: filterByCaterogies,
    selectedCaterogies,
    sizeItem: 20,
  }

  const itemListProps = {
    items: itemsOnPage,
    selectToogle,
    styleForItemBorder,
    selectAreaColor: SelectAreaColors.Green,
    sizeItem: 32,
  }

  const paginationTabProps = {
    page,
    setPage,
    maxPage,
  }

  return {
    searchFilter,
    paginationTabProps,
    inventoryHeaderProps,
    itemCategoryFilterProps,
    itemListProps,
    searchValue,
    selectedItemsLength: selectedItems.length,
  }
}
