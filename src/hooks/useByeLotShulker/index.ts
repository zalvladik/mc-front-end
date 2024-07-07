import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import type { ItemT } from 'src/services/api/Items/types'
import Lot from 'src/services/api/Lot'

export const useByeLotShulker = (afterSubmit: (value: void) => void) => {
  const { onClose } = useModals()

  const toast = useToast()
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: Lot.byeLot,
    onSuccess: (data: ItemT) => {
      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_ITEMS, items => [
        ...(items ?? []),
        data,
      ])

      queryClient.invalidateQueries(CacheKeys.LOTS)

      afterSubmit()

      toast.success({ message: ['Лот куплено'] })
      onClose()
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
