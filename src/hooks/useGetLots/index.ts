import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'
import type { GetLotsProps, LotT } from 'src/services/api/Lot/types'

export const useGetLots = () => {
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: (payload: GetLotsProps) => Lot.getLots(payload),
    onSuccess: data => {
      queryClient.setQueryData<LotT[]>(CacheKeys.LOTS, () => data.lots)
    },
  })

  return {
    byeLots: data?.lots ?? [],
    totalPageByeLots: data?.totalPages,
    mutateGetByeLots: mutate,
    isLoadingByeLots: isLoading,
  }
}
