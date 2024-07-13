import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
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
              const userItems =
                queryClient.getQueryData<ItemT[]>(CacheKeys.USER_ITEMS) ?? []

              const userShulkes =
                queryClient.getQueryData<ShulkerT[]>(CacheKeys.USER_SHULKERS) ?? []

              if (userItems.length && lot?.item) {
                queryClient.setQueryData<ItemT[]>(CacheKeys.USER_ITEMS, items => {
                  return [...(items ?? []), lot!.item!]
                })
              }

              if (userShulkes.length && lot?.shulker) {
                queryClient.setQueryData<ShulkerT[]>(
                  CacheKeys.USER_SHULKERS,
                  shulkers => {
                    return [...(shulkers ?? []), lot!.shulker!]
                  },
                )
              }

              if (!userItems.length) {
                queryClient.invalidateQueries(CacheKeys.USER_ITEMS)
              }

              if (!userShulkes.length) {
                queryClient.invalidateQueries(CacheKeys.USER_SHULKERS)
              }
            }

            return true
          }) ?? [],
      )

      const userLots = queryClient.getQueryData<LotT[]>(CacheKeys.USER_LOTS) ?? []

      if (userLots.length) {
        queryClient.setQueryData<ShulkerT[]>(CacheKeys.USER_LOTS, userLots => {
          return userLots?.filter(lot => lot.id !== data.id) ?? []
        })
      }

      if (!userLots.length) {
        queryClient.invalidateQueries(CacheKeys.USER_LOTS)
      }

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
