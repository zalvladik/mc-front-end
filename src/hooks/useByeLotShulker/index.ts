import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import type { ItemT } from 'src/services/api/Items/types'
import Lot from 'src/services/api/Lot'
import type { ShulkerT } from 'src/services/api/Shulker/types'

export const useByeLotShulker = (afterSubmit: (value: void) => void) => {
  const { onClose } = useModals()

  const toast = useToast()
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: Lot.byeLotShulker,
    onSuccess: (data: ItemT | ShulkerT) => {
      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_SHULKERS, shulkers => [
        ...(shulkers ?? []),
        data,
      ])

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
