import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import type { ItemT } from 'src/services/api/Items/types'
import ItemTicket from 'src/services/api/ItemTicket'
import type { ItemTicketT } from 'src/services/api/ItemTicket/types'

export const useDeleteItemTicket = (itemTicketId: number) => {
  const toast = useToast()
  const queryClient = useQueryClient()
  const { onClose } = useModals()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: () => ItemTicket.deleteItemTicket(itemTicketId),
    onSuccess: () => {
      const deletedItemTicket: ItemT[] =
        queryClient.getQueryData([CacheKeys.ITEM_TICKET, itemTicketId]) ?? []

      queryClient.removeQueries([CacheKeys.ITEM_TICKET, itemTicketId])

      queryClient.setQueryData<ItemTicketT[]>(
        CacheKeys.USER_ITEM_TICKETS,
        tickets => tickets?.filter(ticket => ticket.id !== itemTicketId) ?? [],
      )

      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_ITEMS, items => {
        return [...(items ?? []), ...deletedItemTicket]
      })

      toast.success({ message: ['Квиток видалено'] })
      onClose()
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
