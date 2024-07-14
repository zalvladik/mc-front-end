import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetEnchantLotsProps } from 'src/services/api/Lot/types'

export const useGetEnchantLots = (payload: GetEnchantLotsProps) => {
  const { refetch, data, isLoading } = useQuery({
    queryKey: [CacheKeys.ENCHANT_LOTS, { ...payload }],
    queryFn: () => Lot.getEnchantLots(payload),
    staleTime: 20 * 1000,
    cacheTime: 30 * 1000,
  })

  return {
    refetch,
    data: data?.lots ?? [],
    totalPage: data?.totalPages,
    isLoading,
  }
}
