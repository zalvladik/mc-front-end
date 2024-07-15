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
// import { useGetEnchantLots } from 'src/hooks/useGetEnchantLots'
import { useGetLots } from 'src/hooks/useGetLots'
import { useGetUserLots } from 'src/hooks/useGetUserLots'
import { useLotsSearchParams } from 'src/hooks/useLotsSearchParams'
import type { EnchantSearchParamsT } from 'src/hooks/useLotsSearchParams/types'
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
    updateNewByeLotsSearchParams,
    isCanNewFetchGetByeLots,
    filterListParams,
  } = useLotsSearchParams()

  const {
    category: currentByeLotsCategory,
    page: currentByeLotPage,
    display_nameOrType: currentByeLotDisplay_nameOrType,
  } = newByeLotsSearchParams

  const [enchantSearchParams, setEnchantSearchParams] =
    useState<EnchantSearchParamsT>({
      enchants: {},
      enchantType: '',
      itemType: '',
    })

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
    mutate,
    data: dataByeLots,
    totalPage: totalPageByeLots,
    isLoading: isLoadingByeLots,
  } = useGetLots()

  useEffect(() => {
    mutate({ page: 1, ...filterListParams })

    updateNewByeLotsSearchParams({ page: 1 })
    navigate(auctionUrlQueryParams(currentByeLotsCategory, 1))
  }, [currentByeLotsCategory])

  useEffect(() => {
    mutate({ ...newByeLotsSearchParams, ...filterListParams })

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

  const findLotByName = (): void => {
    if (!isCanNewFetchGetByeLots) return

    updatePrevByeLotsSearchParams()

    mutate({ ...newByeLotsSearchParams, ...filterListParams })

    navigate(
      auctionUrlQueryParams(
        currentByeLotsCategory,
        currentByeLotPage,
        currentByeLotDisplay_nameOrType,
      ),
    )
  }

  const mutateToogle = (): void => {
    mutate({ ...newByeLotsSearchParams, ...filterListParams })
  }

  const providerValue: AuctionContextDataT = useMemo(
    () => ({
      isCanNewFetchGetByeLots,
      auctionFragment,
      setAuctionFragment,
      currentPage: getCurrentPage(),
      totalPages: getTotalPages(),
      findLotByName,
      setCurrentPage: getSetCurrentPage(),
      setSearchValue: getSetSearchValue(),
      setSelectedCategory: (value: string) => {
        updateNewByeLotsSearchParams({ category: value })
      },
      searchValue: getSearchValue(),
      selectedCategory: currentByeLotsCategory,
      dataUserLots: getUserLotsForPage(),
      dataByeLots,
      isLoadingByeLots,
      isLoadingUserLots,
      mutate: mutateToogle,
      isFragment,
      enchantSearchParams,
      setEnchantSearchParams,
      filterListParams,
      updateFilterListParams,
      setStorageTotalPagesByeLots,
    }),
    [
      auctionFragment,
      findLotByName,
      setAuctionFragment,
      currentByeLotsCategory,
      dataUserLots,
      isLoadingByeLots,
      isLoadingUserLots,
      dataByeLots,
      storageTotalPagesByeLots,
    ],
  )

  return (
    <AuctionContext.Provider value={providerValue}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider
