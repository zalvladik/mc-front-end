import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AuctionFragment } from 'src/constants'
import { AuctionContext } from 'src/contexts'
import type {
  AuctionContextDataT,
  AuctionProviderT,
  EnchantSearchParamsT,
  FilterListParamsT,
} from 'src/contexts/AuctionProvider/types'
import { auctionUrlQueryParams } from 'src/helpers'
import { useGetEnchantLots } from 'src/hooks/useGetEnchantLots'
import { useGetLots } from 'src/hooks/useGetLots'
import { useGetUserLots } from 'src/hooks/useGetUserLots'
import type { LotT } from 'src/services/api/Lot/types'

const AuctionProvider = ({ children }: AuctionProviderT): JSX.Element => {
  const navigate = useNavigate()

  const [filterListParams, setFilterListParams] = useState<FilterListParamsT>({
    didNeedUserLots: false,
    didNeedShulkers: false,
    didNeedIdentical: false,
    didPriceToUp: true,
  })

  const [enchantSearchParams, setEnchantSearchParams] =
    useState<EnchantSearchParamsT>({
      enchants: {},
      enchantType: '',
      itemType: '',
    })

  const [searchParams] = useSearchParams()

  const category = searchParams.get('category') || ''
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const display_nameOrType = searchParams.get('display_nameOrType') || ''

  const [auctionFragment, setAuctionFragment] = useState<AuctionFragment>(
    AuctionFragment.BUY_LOTS,
  )

  const [currentPageUserLots, setCurrentPageUserLots] = useState(1)
  const [currentPageByeLots, setCurrentPageByeLots] = useState(page)
  const [currentPageEnchantLots, setCurrentPageEnchantLots] = useState(1)

  const [searchValueUserLots, setSearchValueUserLots] = useState('')
  const [searchValueByeLots, setSearchValueByeLots] = useState(display_nameOrType)

  const [finalSearchValueByeLots, setfinalSearchValueByeLots] =
    useState(display_nameOrType)

  const [selectedCategory, setSelectedCategory] = useState(category)

  const [storageTotalPagesByeLots, setStorageTotalPagesByeLots] = useState(1)

  const [storageTotalPagesEnchantLots, setStorageTotalPagesEnchantLots] = useState(1)

  const { data: dataUserLots, isLoading: isLoadingUserLots } = useGetUserLots()

  const isFragment = {
    isBuyFragment: AuctionFragment.BUY_LOTS === auctionFragment,
    isCreateLotFragment: AuctionFragment.CREATE_LOTS === auctionFragment,
    isUserLotsFragment: AuctionFragment.USER_LOTS === auctionFragment,
    isEnchantFinderFragment: AuctionFragment.ENCHANT_LOTS === auctionFragment,
  }

  const {
    refetch,
    data: dataByeLots,
    totalPage: totalPageByeLots,
    isLoading: isLoadingByeLots,
  } = useGetLots({
    category: selectedCategory,
    page: currentPageByeLots,
    display_nameOrType: finalSearchValueByeLots,
    ...filterListParams,
  })

  const {
    refetch: refetchEnchantSearch,
    data: dataEnchantSearch,
    totalPage: totalPageEnchantLots,
    isLoading: isLoadingEnchantSearch,
  } = useGetEnchantLots({ ...enchantSearchParams, ...filterListParams })

  useEffect(() => {
    setCurrentPageByeLots(1)
    navigate(auctionUrlQueryParams(selectedCategory, 1))
  }, [selectedCategory])

  useEffect(() => {
    navigate(
      auctionUrlQueryParams(
        selectedCategory,
        currentPageByeLots,
        searchValueByeLots,
      ),
    )
  }, [currentPageByeLots])

  useEffect(() => {
    if (totalPageByeLots && totalPageByeLots !== storageTotalPagesByeLots) {
      setStorageTotalPagesByeLots(totalPageByeLots)
    }

    if (
      totalPageEnchantLots &&
      totalPageEnchantLots !== storageTotalPagesEnchantLots
    ) {
      setCurrentPageEnchantLots(totalPageEnchantLots)
    }
  }, [totalPageByeLots, storageTotalPagesEnchantLots])

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
    if (auctionFragment === AuctionFragment.BUY_LOTS) return currentPageByeLots

    if (auctionFragment === AuctionFragment.ENCHANT_LOTS)
      return currentPageEnchantLots

    return currentPageUserLots
  }

  const getSetCurrentPage = (): Dispatch<SetStateAction<number>> => {
    if (auctionFragment === AuctionFragment.BUY_LOTS) return setCurrentPageByeLots

    if (auctionFragment === AuctionFragment.ENCHANT_LOTS)
      return setCurrentPageEnchantLots

    return setCurrentPageUserLots
  }

  const getTotalPages = (): number => {
    if (auctionFragment === AuctionFragment.BUY_LOTS) return storageTotalPagesByeLots

    if (auctionFragment === AuctionFragment.ENCHANT_LOTS)
      return storageTotalPagesEnchantLots

    return tolalPageUserLots
  }

  const getSearchValue = (): string => {
    if (auctionFragment === AuctionFragment.BUY_LOTS) return searchValueByeLots

    return searchValueUserLots
  }

  const getSetSearchValue = (): Dispatch<SetStateAction<string>> => {
    if (auctionFragment === AuctionFragment.BUY_LOTS) return setSearchValueByeLots

    return setSearchValueUserLots
  }

  const findLotByName = (): void => {
    setfinalSearchValueByeLots(searchValueByeLots)
    setCurrentPageByeLots(1)
    navigate(auctionUrlQueryParams(selectedCategory, 1, searchValueByeLots))
  }

  const providerValue: AuctionContextDataT = useMemo(
    () => ({
      auctionFragment,
      setAuctionFragment,
      currentPage: getCurrentPage(),
      totalPages: getTotalPages(),
      findLotByName,
      setCurrentPage: getSetCurrentPage(),
      setSearchValue: getSetSearchValue(),
      setSelectedCategory,
      searchValue: getSearchValue(),
      selectedCategory,
      dataUserLots: getUserLotsForPage(),
      dataByeLots,
      isLoadingByeLots,
      isLoadingUserLots,
      refetch,
      isFragment,
      enchantSearchParams,
      setEnchantSearchParams,
      filterListParams,
      setFilterListParams,
      setStorageTotalPagesByeLots,
    }),
    [
      auctionFragment,
      findLotByName,
      setSelectedCategory,
      setAuctionFragment,
      selectedCategory,
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
