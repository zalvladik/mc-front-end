import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetLotsProps } from 'src/services/api/Lot/types'

export const useGetLots = ({
  isCanFetch,
  ...payload
}: GetLotsProps & { isCanFetch: boolean }) => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: [CacheKeys.LOTS, payload],
    queryFn: () => Lot.getLots(payload),
    enabled: isCanFetch,
    keepPreviousData: true,
  })

  return {
    refetch,
    data: data?.lots ?? [],
    totalPageByeLots: data?.totalPages,
    isLoading,
    isRefetching,
  }
}
