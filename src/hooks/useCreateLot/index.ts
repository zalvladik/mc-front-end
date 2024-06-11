import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import Lot from 'src/services/api/Lot'
import type { LotT } from 'src/services/api/Lot/types'
import type { ItemT } from 'src/services/api/UserInventory/types'

export const useCreateLot = () => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: Lot.post,
    onSuccess: (data: LotT) => {
      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_INVENTORY_ITEMS, items =>
        items!.filter(item => data.item.id !== item.id),
      )

      toast.success({ message: ['Лот створено'], width: -40 })
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
