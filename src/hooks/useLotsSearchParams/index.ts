import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type {
  FilterListParamsT,
  NewByeLotsSearchParamsT,
  NewEnchantSearchParamsT,
  PrevByeLotsSearchParamsT,
  PrevEnchantSearchParamsT,
  UpdateFilterListParamsProps,
  UpdateNewByeLotsSearchParamsProps,
  UpdateNewEnchantSearchParamsT,
} from 'src/hooks/useLotsSearchParams/types'
import { EnchantsEnum } from 'src/types'

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
      ...filterListParams,
    })

  const [prevEnchantSearchParams, setPrevEnchantSearchParams] =
    useState<PrevEnchantSearchParamsT>({
      enchants: {},
      enchantType: '',
      itemType: '',
      ...filterListParams,
    })

  const [newByeLotsSearchParams, setNewPrevByeLotsSearchParams] =
    useState<NewByeLotsSearchParamsT>({
      category,
      page,
      display_nameOrType,
    })

  const [newEnchantSearchParams, setNewEnchantSearchParams] =
    useState<NewEnchantSearchParamsT>({
      enchants: {},
      enchantType: '',
      itemType: '',
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

  const updatePrevEnchantSearchParams = () => {
    setPrevEnchantSearchParams({ ...newEnchantSearchParams, ...filterListParams })
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

  const isCanNewFetchGetEnchantItems = (): boolean => {
    const newEnchantSearchParamsWithFilter: { [key: string]: any } = {
      ...newEnchantSearchParams,
      ...filterListParams,
    }

    // console.log({ prevEnchantSearchParams, newEnchantSearchParamsWithFilter })

    const {
      enchants: newEnchants,
      newEnchantType,
      ...newRest
    } = newEnchantSearchParamsWithFilter
    const {
      enchants: prevEnchants,
      prevEnchantType,
      ...prevRest
    } = prevEnchantSearchParams

    const newEnchantsLength = Object.keys(newEnchants).length
    const prevEnchantsLength = Object.keys(prevEnchants).length

    const searchParamsResult = Boolean(
      Object.keys(prevRest).find(key => newRest[key] !== prevRest[key]),
    )

    if (!newEnchantsLength) {
      if (!prevEnchantType && newEnchantType && searchParamsResult) return true

      return searchParamsResult ? newEnchantType !== prevEnchantType : false
    }

    const enchantKeys = Object.values(EnchantsEnum)

    const enchantsResult = Boolean(
      (() => {
        if (newEnchantsLength !== prevEnchantsLength) return true

        if (!newEnchantsLength && !prevEnchantsLength) return false

        return enchantKeys.find(enchant => {
          if (!newEnchants[enchant] && !prevEnchants[enchant]) return false

          if (!newEnchants[enchant] || !prevEnchants[enchant]) return true

          return !(newEnchants[enchant] === prevEnchants[enchant])
        })
      })(),
    )

    return searchParamsResult || enchantsResult
  }

  const updateEnchantSearchParams = ({
    itemType,
    enchantType,
    enchants,
  }: UpdateNewEnchantSearchParamsT) => {
    const updatedParams = { ...newEnchantSearchParams }

    if (itemType) updatedParams.itemType = itemType

    if (enchantType) updatedParams.enchantType = enchantType

    if (enchants) updatedParams.enchants = enchants

    setNewEnchantSearchParams(updatedParams)
  }

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
    newEnchantSearchParams,
    newByeLotsSearchParams,
    updateFilterListParams,
    updatePrevByeLotsSearchParams,
    updateNewByeLotsSearchParams,
    updateEnchantSearchParams,
    updatePrevEnchantSearchParams,
    isCanNewFetchGetByeLots: isCanNewFetchGetByeLots(),
    isCanNewFetchGetEnchantItems: isCanNewFetchGetEnchantItems(),
    filterListParams,
  }
}
