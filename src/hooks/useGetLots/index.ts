import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetLotsProps } from 'src/services/api/Lot/types'

export const useGetLots = (
  payload: GetLotsProps,
  isCanNewFetchGetByeLots: boolean,
) => {
  const { refetch, data, isLoading } = useQuery({
    queryKey: [CacheKeys.LOTS, { ...payload }],
    queryFn: () => Lot.getLots(payload),
    enabled: isCanNewFetchGetByeLots,
    staleTime: 50 * 1000,
    cacheTime: 60 * 1000,
  })

  return {
    refetch,
    data: data?.lots ?? [],
    totalPage: data?.totalPages,
    isLoading,
  }
}
