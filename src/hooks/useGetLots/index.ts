import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetLotsProps } from 'src/services/api/Lot/types'

export const useGetLots = (payload: GetLotsProps) => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: [CacheKeys.LOTS, payload],
    queryFn: () => Lot.getLots(payload),
    keepPreviousData: true,
  })

  return {
    refetch,
    byeLots: data?.lots ?? [],
    totalPageByeLots: data?.totalPages,
    isLoadingByeLots: isLoading,
    isRefetching,
  }
}
