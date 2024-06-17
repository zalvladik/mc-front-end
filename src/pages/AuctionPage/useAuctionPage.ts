import { useEffect, useState } from 'react'
import { AuctionFragment } from 'src/constants'
import { useGetLots } from 'src/hooks/useGetLots'
import { useGetUserLots } from 'src/hooks/useGetUserLots'

export const useAuctionPage = () => {
  const [currentFragment, setCurrentFragment] = useState<AuctionFragment>(
    AuctionFragment.BUY_LOT,
  )

  const [currentPageUserLots, setCurrentPageUserLots] = useState<number>(1)
  const [currentPageByeLots, setCurrentPageByeLots] = useState<number>(1)

  const [searchValueByeLots, setSearchValueByeLots] = useState<string>('')
  const [searchValueUserLots, setSearchValueUserLots] = useState<string>('')

  const [selectedCaterogy, setSelectedCaterogy] = useState<string>('')

  const [storageTotalPages, setSorageTotalPages] = useState<number>(1)

  const { userLots, isLoadingUserLots } = useGetUserLots()
  const { byeLots, totalPageByeLots, mutateGetByeLots, isLoadingByeLots } =
    useGetLots()

  const isFragment = {
    isBuyFragment: AuctionFragment.BUY_LOT === currentFragment,
    isCreateLotFragment: AuctionFragment.CREATE_LOT === currentFragment,
    isUserLotsFragment: AuctionFragment.USER_LOTS === currentFragment,
  }

  useEffect(() => {
    mutateGetByeLots({
      category: selectedCaterogy,
      page: currentPageByeLots,
      display_nameOrType: searchValueByeLots || undefined,
    })
  }, [currentPageByeLots])

  useEffect(() => {
    mutateGetByeLots({
      category: selectedCaterogy,
    })

    setSorageTotalPages(1)
    setSearchValueByeLots('')
  }, [selectedCaterogy, mutateGetByeLots])

  useEffect(() => {
    if (totalPageByeLots && totalPageByeLots !== storageTotalPages) {
      setSorageTotalPages(totalPageByeLots)
    }
  }, [totalPageByeLots])

  const findLotByName = () => {
    mutateGetByeLots({
      category: selectedCaterogy || undefined,
      display_nameOrType: searchValueByeLots,
    })
  }

  const filteredUserLots = userLots.filter(
    ({ item }) =>
      item.display_name.toLowerCase().includes(searchValueUserLots.toLowerCase()) ||
      item.type.toLowerCase().includes(searchValueUserLots.toLowerCase()),
  )

  const tolalPageUserLots = Math.ceil(filteredUserLots.length / 8)

  const getUserLotsForPage = () => {
    const firstLotInPage = 8 * (currentPageUserLots - 1)
    const lastLotInPage = firstLotInPage + 8

    return filteredUserLots.slice(firstLotInPage, lastLotInPage)
  }

  const auctionControllerProps = { currentFragment, setCurrentFragment }

  const auctionCategoryProps = {
    selectedCaterogy,
    setSelectedCaterogy,
  }

  const getCurrentPage = () => {
    if (currentFragment === AuctionFragment.BUY_LOT) return currentPageByeLots

    return currentPageUserLots
  }

  const getCurrentFragment = () => {
    if (currentFragment === AuctionFragment.BUY_LOT) return setCurrentPageByeLots

    return setCurrentPageUserLots
  }

  const getTotalPages = () => {
    if (currentFragment === AuctionFragment.BUY_LOT) return storageTotalPages

    return tolalPageUserLots
  }

  const getSearchValue = () => {
    if (currentFragment === AuctionFragment.BUY_LOT) return searchValueByeLots

    return searchValueUserLots
  }

  const getSetSearchValue = () => {
    if (currentFragment === AuctionFragment.BUY_LOT) return setSearchValueByeLots

    return setSearchValueUserLots
  }

  const auctionSearchInputProps = {
    searchValue: getSearchValue(),
    setSearchValue: getSetSearchValue(),
  }

  const auctionPaginationProps = {
    currentPage: getCurrentPage(),
    setCurrentPage: getCurrentFragment(),
    totalPages: getTotalPages(),
  }

  const auctionByeLotsProps = {
    lots: byeLots,
    isLoading: isLoadingByeLots,
  }

  const auctionUserLotsProps = {
    lots: getUserLotsForPage(),
    isLoading: isLoadingUserLots,
  }

  return {
    currentFragment,
    setCurrentFragment,
    isFragment,
    auctionByeLotsProps,
    auctionControllerProps,
    auctionUserLotsProps,
    auctionCategoryProps,
    auctionPaginationProps,
    auctionSearchInputProps,
    findLotByName,
    totalPages: getTotalPages(),
  }
}
