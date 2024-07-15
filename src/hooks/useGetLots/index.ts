import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetLotsProps } from 'src/services/api/Lot/types'

export const useGetLots = (
  payload: GetLotsProps,
  isCanNewFetchGetByeLots: boolean,
  fetchToggle: boolean,
  setFetchToggle: (value: boolean) => void,
  isFirstFetchByeLots: boolean,
  setIsFirstFetchByeLots: (value: boolean) => void,
) => {
  console.log({ isFirstFetchByeLots, isCanNewFetchGetByeLots, fetchToggle })
  const { refetch, data, isLoading } = useQuery({
    queryKey: [CacheKeys.LOTS, { ...payload }],
    queryFn: () => Lot.getLots(payload),
    enabled: isFirstFetchByeLots || (isCanNewFetchGetByeLots && fetchToggle),
    staleTime: 50 * 1000,
    cacheTime: 60 * 1000,
    onSuccess: () => {
      setIsFirstFetchByeLots(false)
      setFetchToggle(false)
    },
  })

  return {
    refetch,
    data: data?.lots ?? [],
    totalPage: data?.totalPages,
    isLoading,
  }
}
