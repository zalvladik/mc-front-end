import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys, CategoryEnum } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import type { ItemT } from 'src/services/api/Items/types'
import Lot from 'src/services/api/Lot'
import type { LotT } from 'src/services/api/Lot/types'
import type { ShulkerT } from 'src/services/api/Shulker/types'

export const useDeleteUserLot = (afterSubmit: (value: void) => void) => {
  const toast = useToast()
  const queryClient = useQueryClient()
  const { onClose } = useModals()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: (id: number) => Lot.deleteUserLot(id),
    onSuccess: data => {
      queryClient.setQueryData<LotT[]>(
        CacheKeys.USER_LOTS,
        lots =>
          lots?.filter(lot => {
            if (lot.id === data.id) {
              const lotElement: ItemT | ShulkerT = (lot?.shulker || lot?.item)!

              if (lotElement.categories.includes(CategoryEnum.SHULKERS)) {
                queryClient.setQueryData<ItemT[]>(CacheKeys.USER_SHULKERS, items => {
                  return [...(items ?? []), lotElement]
                })
              } else {
                queryClient.setQueryData<ItemT[]>(CacheKeys.USER_ITEMS, items => {
                  return [...(items ?? []), lotElement]
                })
              }

              return false
            }

            return true
          }) ?? [],
      )

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
