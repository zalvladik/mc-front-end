import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type {
  FilterListParamsT,
  NewByeLotsSearchParamsT,
  PrevByeLotsSearchParamsT,
  UpdateFilterListParamsProps,
  UpdateNewByeLotsSearchParamsProps,
} from 'src/hooks/useLotsSearchParams/types'

export const useLotsSearchParams = () => {
  const [searchParams] = useSearchParams()

  const category = searchParams.get('category') || ''
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const display_nameOrType = searchParams.get('display_nameOrType') || ''

  const [filterListParams, setFilterListParams] = useState<FilterListParamsT>({
    didNeedUserLots: false,
    didNeedShulkers: false,
    didNeedIdentical: false,
    didPriceToUp: true,
  })

  const [prevByeLotsSearchParams, setPrevByeLotsSearchParams] =
    useState<PrevByeLotsSearchParamsT>({
      category,
      page,
      display_nameOrType,
      didNeedUserLots: false,
      didNeedShulkers: false,
      didNeedIdentical: false,
      didPriceToUp: true,
    })

  const [newByeLotsSearchParams, setNewPrevByeLotsSearchParams] =
    useState<NewByeLotsSearchParamsT>({
      category,
      page,
      display_nameOrType,
    })

  const updateNewByeLotsSearchParams = ({
    category,
    page,
    display_nameOrType,
  }: UpdateNewByeLotsSearchParamsProps) => {
    const updatedParams = { ...newByeLotsSearchParams, ...filterListParams }

    if (category !== undefined) {
      updatedParams.category = category
    }

    if (page !== undefined) {
      updatedParams.page = page
    }

    if (display_nameOrType !== undefined) {
      updatedParams.display_nameOrType = display_nameOrType
    }

    setNewPrevByeLotsSearchParams(updatedParams)
  }

  const updatePrevByeLotsSearchParams = () => {
    setPrevByeLotsSearchParams({ ...newByeLotsSearchParams, ...filterListParams })
  }

  const isCanNewFetchGetByeLots = (): boolean => {
    const searchParamsKeys = Object.keys(prevByeLotsSearchParams)

    const newByeLotsSearchParamsWithFilter: { [key: string]: any } = {
      ...newByeLotsSearchParams,
      ...filterListParams,
    }

    return Boolean(
      searchParamsKeys.find(
        key =>
          newByeLotsSearchParamsWithFilter[key] !== prevByeLotsSearchParams[key],
      ),
    )
  }

  // const [enchantSearchParams, setEnchantSearchParams] =
  //   useState<EnchantSearchParamsT>({
  //     enchants: {},
  //     enchantType: '',
  //     itemType: '',
  //   })

  const updateFilterListParams = ({
    didNeedUserLots,
    didNeedShulkers,
    didNeedIdentical,
    didPriceToUp,
  }: UpdateFilterListParamsProps) => {
    const updatedParams = { ...filterListParams }

    if (didNeedUserLots !== undefined) {
      updatedParams.didNeedUserLots = didNeedUserLots
    }

    if (didNeedShulkers !== undefined) {
      updatedParams.didNeedShulkers = didNeedShulkers
    }

    if (didNeedIdentical !== undefined) {
      updatedParams.didNeedIdentical = didNeedIdentical
    }

    if (didPriceToUp !== undefined) {
      updatedParams.didPriceToUp = didPriceToUp
    }

    setFilterListParams(updatedParams)
  }

  return {
    newByeLotsSearchParams,
    updateFilterListParams,
    updatePrevByeLotsSearchParams,
    updateNewByeLotsSearchParams,
    isCanNewFetchGetByeLots: isCanNewFetchGetByeLots(),
    filterListParams,
  }
}
