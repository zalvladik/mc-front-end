import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import type { ItemT } from 'src/services/api/Items/types'
import Lot from 'src/services/api/Lot'
import type { LotT } from 'src/services/api/Lot/types'

export const useDeleteUserLot = (afterSubmit: (value: void) => void) => {
  const toast = useToast()
  const queryClient = useQueryClient()
  const { onClose } = useModals()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: (id: number) => Lot.deleteUserLot(id),
    onSuccess: data => {
      queryClient.setQueryData<LotT[]>(
        CacheKeys.USER_LOTS,
        lots => lots?.filter(lot => lot.id !== data.lotId) ?? [],
      )

      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_ITEMS, items => {
        return [...(items ?? []), data.item]
      })

      afterSubmit()
      toast.success({ message: ['Лот видалено'] })
      onClose()
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { data, mutate, isLoading }
}
