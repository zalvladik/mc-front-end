import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuctionFragment } from 'src/constants'
import { AuctionContext } from 'src/contexts'
import type {
  AuctionContextDataT,
  AuctionProviderT,
} from 'src/contexts/AuctionProvider/types'
import { auctionUrlQueryParams } from 'src/helpers'
import { useGetEnchantLots } from 'src/hooks/useGetEnchantLots'
import { useGetLots } from 'src/hooks/useGetLots'
import { useGetUserLots } from 'src/hooks/useGetUserLots'
import { useLotsSearchParams } from 'src/hooks/useLotsSearchParams'
import type { LotT } from 'src/services/api/Lot/types'

const AuctionProvider = ({ children }: AuctionProviderT): JSX.Element => {
  const navigate = useNavigate()

  const [auctionFragment, setAuctionFragment] = useState<AuctionFragment>(
    AuctionFragment.BUY_LOTS,
  )

  const {
    newByeLotsSearchParams,
    updateFilterListParams,
    updatePrevByeLotsSearchParams,
    updatePrevEnchantSearchParams,
    updateNewByeLotsSearchParams,
    isCanNewFetchGetByeLots,
    filterListParams,
    newEnchantSearchParams,
    updateEnchantSearchParams,
    isCanNewFetchGetEnchantItems,
  } = useLotsSearchParams()

  const {
    category: currentByeLotsCategory,
    page: currentByeLotPage,
    display_nameOrType: currentByeLotDisplay_nameOrType,
  } = newByeLotsSearchParams

  const [currentPageUserLots, setCurrentPageUserLots] = useState(1)

  const [searchValueUserLots, setSearchValueUserLots] = useState('')

  const [storageTotalPagesByeLots, setStorageTotalPagesByeLots] = useState(1)

  const { data: dataUserLots, isLoading: isLoadingUserLots } = useGetUserLots()

  const isFragment = {
    isBuyFragment: AuctionFragment.BUY_LOTS === auctionFragment,
    isCreateLotFragment: AuctionFragment.CREATE_LOTS === auctionFragment,
    isUserLotsFragment: AuctionFragment.USER_LOTS === auctionFragment,
    isEnchantFinderFragment: AuctionFragment.ENCHANT_LOTS === auctionFragment,
  }

  const {
    mutate: mutateByeLots,
    data: dataByeLots,
    totalPage: totalPageByeLots,
    isLoading: isLoadingByeLots,
  } = useGetLots()

  const {
    mutate: mutateEnchantLots,
    // data: dataEnchantLots,
    // totalPage: totalPageEnchantLots,
    // isLoading: isLoadingEnchantLots,
  } = useGetEnchantLots()

  useEffect(() => {
    mutateByeLots({
      page: 1,
      category: currentByeLotsCategory,
      display_nameOrType: currentByeLotDisplay_nameOrType,
      ...filterListParams,
    })

    updatePrevByeLotsSearchParams()
    updateNewByeLotsSearchParams({ page: 1 })
    navigate(
      auctionUrlQueryParams(
        currentByeLotsCategory,
        1,
        currentByeLotDisplay_nameOrType,
      ),
    )
  }, [currentByeLotsCategory])

  useEffect(() => {
    mutateByeLots({ ...newByeLotsSearchParams, ...filterListParams })

    updatePrevByeLotsSearchParams()
    navigate(
      auctionUrlQueryParams(
        currentByeLotsCategory,
        currentByeLotPage,
        currentByeLotDisplay_nameOrType,
      ),
    )
  }, [currentByeLotPage])

  useEffect(() => {
    if (totalPageByeLots && totalPageByeLots !== storageTotalPagesByeLots) {
      setStorageTotalPagesByeLots(totalPageByeLots)
    }
  }, [totalPageByeLots])

  const filteredUserLots = dataUserLots.filter(lot => {
    const lotElement = (lot?.shulker || lot?.item)!

    return (
      lotElement?.display_name
        .toLowerCase()
        .includes(searchValueUserLots.toLowerCase()) ||
      lotElement?.type.toLowerCase().includes(searchValueUserLots.toLowerCase())
    )
  })

  const tolalPageUserLots = Math.ceil(filteredUserLots.length / 8)

  const getUserLotsForPage = (): LotT[] => {
    const firstLotInPage = 8 * (currentPageUserLots - 1)
    const lastLotInPage = firstLotInPage + 8

    return filteredUserLots.slice(firstLotInPage, lastLotInPage)
  }

  const getCurrentPage = (): number => {
    if (auctionFragment === AuctionFragment.BUY_LOTS)
      return newByeLotsSearchParams.page

    return currentPageUserLots
  }

  const getSetCurrentPage = (): Dispatch<SetStateAction<any>> => {
    if (auctionFragment === AuctionFragment.BUY_LOTS)
      return (value: number) => {
        updateNewByeLotsSearchParams({ page: value })
      }

    return setCurrentPageUserLots
  }

  const getTotalPages = (): number => {
    if (auctionFragment === AuctionFragment.BUY_LOTS) return storageTotalPagesByeLots

    return tolalPageUserLots
  }

  const getSearchValue = (): string => {
    if (auctionFragment === AuctionFragment.BUY_LOTS)
      return newByeLotsSearchParams.display_nameOrType

    return searchValueUserLots
  }

  const getSetSearchValue = (): Dispatch<SetStateAction<any>> => {
    if (auctionFragment === AuctionFragment.BUY_LOTS)
      return (value: string) => {
        updateNewByeLotsSearchParams({ display_nameOrType: value })
      }

    return setSearchValueUserLots
  }

  const mutateByeLotsHandle = (): void => {
    mutateByeLots({ ...newByeLotsSearchParams, ...filterListParams })
  }

  const mutateEnchantLotsHandle = (): void => {
    mutateEnchantLots({ ...newEnchantSearchParams, ...filterListParams })
  }

  const mutateByeLotsHandleButton = (): void => {
    if (!isCanNewFetchGetByeLots) return

    updatePrevByeLotsSearchParams()

    mutateByeLotsHandle()

    navigate(
      auctionUrlQueryParams(
        currentByeLotsCategory,
        currentByeLotPage,
        currentByeLotDisplay_nameOrType,
      ),
    )
  }

  const mutateEnchantLotsHandleButton = (): void => {
    if (!isCanNewFetchGetEnchantItems) return

    updatePrevEnchantSearchParams()

    mutateEnchantLotsHandle()
  }

  const providerValue: AuctionContextDataT = useMemo(
    () => ({
      isCanNewFetchGetEnchantItems,
      isCanNewFetchGetByeLots,
      auctionFragment,
      currentPage: getCurrentPage(),
      totalPages: getTotalPages(),
      searchValue: getSearchValue(),
      selectedCategory: currentByeLotsCategory,
      dataUserLots: getUserLotsForPage(),
      dataByeLots,
      isLoadingByeLots,
      isLoadingUserLots,
      isFragment,
      newEnchantSearchParams,
      filterListParams,
      setAuctionFragment,
      updateFilterListParams,
      setStorageTotalPagesByeLots,
      updateEnchantSearchParams,
      mutateByeLotsHandle,
      mutateEnchantLotsHandle,
      mutateByeLotsHandleButton,
      mutateEnchantLotsHandleButton,
      setCurrentPage: getSetCurrentPage(),
      setSearchValue: getSetSearchValue(),
      setSelectedCategory: (value: string) => {
        updateNewByeLotsSearchParams({ category: value })
      },
    }),
    [
      auctionFragment,
      mutateByeLotsHandleButton,
      setAuctionFragment,
      currentByeLotsCategory,
      dataUserLots,
      isLoadingByeLots,
      isLoadingUserLots,
      dataByeLots,
      storageTotalPagesByeLots,
      isCanNewFetchGetEnchantItems,
    ],
  )

  return (
    <AuctionContext.Provider value={providerValue}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider
