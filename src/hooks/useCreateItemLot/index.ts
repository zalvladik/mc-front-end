import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import type { ItemT } from 'src/services/api/Items/types'
import Lot from 'src/services/api/Lot'
import type { LotT } from 'src/services/api/Lot/types'

export const useCreateItemLot = () => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { data, mutate, isLoading, isSuccess } = useMutation({
    mutationFn: Lot.postItemLot,
    onSuccess: (data: LotT) => {
      queryClient.setQueryData<LotT[]>(CacheKeys.USER_LOTS, lots => [
        ...(lots ?? []),
        data,
      ])

      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_ITEMS, items =>
        items!.filter(item => data.item!.id !== item.id),
      )

      toast.success({ message: ['Лот створено'] })
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading, isSuccess }
}
