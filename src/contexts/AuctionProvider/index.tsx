import { useEffect, useMemo, useState } from 'react'
import {
  AuctionContextDataT,
  AuctionProviderT,
} from 'src/contexts/AuctionProvider/types'
import { AuctionFragment } from 'src/constants'
import { AuctionContext } from 'src/contexts'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useGetUserLots } from 'src/hooks/useGetUserLots'
import { useGetLots } from 'src/hooks/useGetLots'
import { auctionUrlQueryParams } from 'src/helpers'

const AuctionProvider = ({ children }: AuctionProviderT): JSX.Element => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  const category = searchParams.get('category') || ''
  const page = Number(searchParams.get('page') || 1)
  const display_nameOrType = searchParams.get('display_nameOrType') || ''

  const [auctionFragment, setAuctionFragment] = useState<AuctionFragment>(
    AuctionFragment.BUY_LOT,
  )

  const [currentPageUserLots, setCurrentPageUserLots] = useState(1)
  const [currentPageByeLots, setCurrentPageByeLots] = useState(page)

  const [searchValueUserLots, setSearchValueUserLots] = useState('')
  const [searchValueByeLots, setSearchValueByeLots] = useState(display_nameOrType)

  const [selectedCategory, setSelectedCategory] = useState(category)

  const [storageTotalPages, setStorageTotalPages] = useState(1)

  const { data: dataUserLots, isLoading: isLoadingUserLots } = useGetUserLots()

  const {
    refetch,
    data: dataByeLots,
    totalPageByeLots,
    isLoading: isLoadingByeLots,
    isRefetching: isRefetchingByeLots,
  } = useGetLots({
    category: selectedCategory,
    page: currentPageByeLots,
    display_nameOrType: searchValueByeLots,
    isCanFetch: display_nameOrType === searchValueByeLots,
  })

  useEffect(() => {
    refetch()

    setCurrentPageByeLots(1)
    setSearchValueByeLots('')

    navigate(auctionUrlQueryParams(selectedCategory, 1))
  }, [selectedCategory])

  useEffect(() => {
    refetch()

    navigate(
      auctionUrlQueryParams(
        selectedCategory,
        currentPageByeLots,
        searchValueByeLots,
      ),
    )
  }, [currentPageByeLots])

  useEffect(() => {
    if (totalPageByeLots && totalPageByeLots !== storageTotalPages) {
      setStorageTotalPages(totalPageByeLots)
    }
  }, [totalPageByeLots])

  const getCurrentPage = () => {
    if (auctionFragment === AuctionFragment.BUY_LOT) return currentPageByeLots

    return currentPageUserLots
  }

  const getAuctionFragment = () => {
    if (auctionFragment === AuctionFragment.BUY_LOT) return setCurrentPageByeLots

    return setCurrentPageUserLots
  }

  const getTotalPages = () => {
    if (auctionFragment === AuctionFragment.BUY_LOT) return storageTotalPages

    return tolalPageUserLots
  }

  const getSearchValue = () => {
    if (auctionFragment === AuctionFragment.BUY_LOT) return searchValueByeLots

    return searchValueUserLots
  }

  const getSetSearchValue = () => {
    if (auctionFragment === AuctionFragment.BUY_LOT) return setSearchValueByeLots

    return setSearchValueUserLots
  }

  const findLotByName = () => {
    refetch()
    navigate(auctionUrlQueryParams(selectedCategory, 1, searchValueByeLots))
  }

  const filteredUserLots = dataUserLots.filter(
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

  const providerValue: AuctionContextDataT = useMemo(
    () => ({
      auctionFragment,
      setAuctionFragment,
      storageTotalPages,
      currentPage: getCurrentPage(),
      totalPages: getTotalPages(),
      findLotByName,
      setCurrentPage: getAuctionFragment(),
      setSearchValue: getSetSearchValue(),
      setSelectedCategory,
      searchValue: getSearchValue(),
      selectedCategory,
      dataUserLots: getUserLotsForPage(),
      isLoadingByeLots,
      isLoadingUserLots,
      dataByeLots,
      isRefetchingByeLots,
    }),
    [
      auctionFragment,
      storageTotalPages,
      findLotByName,
      setSelectedCategory,
      setAuctionFragment,
      selectedCategory,
      dataUserLots,
      isLoadingByeLots,
      isLoadingUserLots,
      dataByeLots,
      isRefetchingByeLots,
    ],
  )

  return (
    <AuctionContext.Provider value={providerValue}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider
