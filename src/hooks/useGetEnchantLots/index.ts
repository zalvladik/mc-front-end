import { useMutation } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetEnchantLotsProps } from 'src/services/api/Lot/types'

export const useGetEnchantLots = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationKey: CacheKeys.ENCHANT_LOTS,
    mutationFn: (payload: GetEnchantLotsProps) => Lot.getEnchantLots(payload),
  })

  return {
    mutate,
    data: data?.lots ?? [],
    totalPage: data?.totalPages,
    isLoading,
  }
}
