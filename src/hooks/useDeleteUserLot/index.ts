import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import Lot from 'src/services/api/Lot'
import type { LotT } from 'src/services/api/Lot/types'
import type { ItemT } from 'src/services/api/UserInventory/types'

export const useDeleteUserLot = () => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: (id: number) => Lot.deleteUserLot(id),
    onSuccess: data => {
      queryClient.setQueryData<LotT[]>(
        CacheKeys.USER_LOTS,
        lots => lots?.filter(lot => lot.id !== data.lotId) ?? [],
      )

      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_INVENTORY_ITEMS, items => {
        return [...(items ?? []), data.item]
      })

      toast.success({ message: ['Лот видалено'] })
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, isLoading }
}
