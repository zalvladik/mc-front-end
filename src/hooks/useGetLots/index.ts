import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetLotsProps } from 'src/services/api/Lot/types'

export const useGetLots = (payload: GetLotsProps) => {
  const { refetch, data, isLoading, isRefetching } = useQuery({
    queryKey: [CacheKeys.LOTS, { ...payload }],
    queryFn: () => Lot.getLots(payload),
    staleTime: 1 * 60 * 1000,
    cacheTime: 2 * 60 * 1000,
  })

  return {
    refetch,
    data: data?.lots ?? [],
    totalPageByeLots: data?.totalPages,
    isLoading: isLoading || isRefetching,
  }
}
