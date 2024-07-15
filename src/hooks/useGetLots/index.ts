import { useMutation } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetLotsProps } from 'src/services/api/Lot/types'

export const useGetLots = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationKey: CacheKeys.LOTS,
    mutationFn: (payload: GetLotsProps) => Lot.getLots(payload),
  })

  return {
    mutate,
    data: data?.lots ?? [],
    totalPage: data?.totalPages,
    isLoading,
  }
}
