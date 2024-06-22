import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AuctionFragment } from 'src/constants'
import { auctionUrlQueryParams } from 'src/helpers'
import { useGetLots } from 'src/hooks/useGetLots'
import { useGetUserLots } from 'src/hooks/useGetUserLots'

export const useAuctionPage = () => {
  const [currentFragment, setCurrentFragment] = useState<AuctionFragment>(
    AuctionFragment.BUY_LOT,
  )

  const [searchParams] = useSearchParams()

  const category = searchParams.get('category') || ''
  const page = Number(searchParams.get('page') || 1)
  const display_nameOrType = searchParams.get('display_nameOrType') || ''

  const navigate = useNavigate()

  const [currentPageUserLots, setCurrentPageUserLots] = useState(1)
  const [currentPageByeLots, setCurrentPageByeLots] = useState(page)

  const [searchValueUserLots, setSearchValueUserLots] = useState('')
  const [searchValueByeLots, setSearchValueByeLots] = useState(display_nameOrType)

  const [selectedCaterogy, setSelectedCaterogy] = useState(category)

  const [storageTotalPages, setStorageTotalPages] = useState(1)

  const { userLots, isLoadingUserLots } = useGetUserLots()
  const { refetch, byeLots, totalPageByeLots, isLoadingByeLots, isRefetching } =
    useGetLots({
      category: selectedCaterogy,
      page: currentPageByeLots,
      display_nameOrType: searchValueByeLots,
    })

  const isFragment = {
    isBuyFragment: AuctionFragment.BUY_LOT === currentFragment,
    isCreateLotFragment: AuctionFragment.CREATE_LOT === currentFragment,
    isUserLotsFragment: AuctionFragment.USER_LOTS === currentFragment,
  }

  useEffect(() => {
    refetch()

    navigate(
      auctionUrlQueryParams(
        selectedCaterogy,
        currentPageByeLots,
        searchValueByeLots,
      ),
    )
  }, [currentPageByeLots])

  useEffect(() => {
    refetch()

    setCurrentPageByeLots(1)
    setSearchValueByeLots('')

    navigate(auctionUrlQueryParams(selectedCaterogy, 1))
  }, [selectedCaterogy])

  useEffect(() => {
    if (totalPageByeLots && totalPageByeLots !== storageTotalPages) {
      setStorageTotalPages(totalPageByeLots)
    }
  }, [totalPageByeLots])

  const findLotByName = () => {
    refetch()
    navigate(auctionUrlQueryParams(selectedCaterogy, 1, searchValueByeLots))
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
    isLoading: isLoadingByeLots || isRefetching,
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
