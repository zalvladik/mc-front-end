import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import ItemTicket from 'src/services/api/ItemTicket'
import type { ItemTicketT } from 'src/services/api/ItemTicket/types'
import type { ItemT } from 'src/services/api/UserInventory/types'

export const useDeleteItemTicket = (itemTicketId: number, itemIds: number[]) => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: () => ItemTicket.deleteItemTicket(itemIds, itemTicketId),
    onSuccess: data => {
      queryClient.removeQueries([CacheKeys.ITEM_TICKET, itemTicketId])

      queryClient.setQueryData<ItemTicketT[]>(
        CacheKeys.USER_INVENTORY_ITEM_TICKETS,
        tickets => tickets?.filter(ticket => ticket.id !== itemTicketId) ?? [],
      )

      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_INVENTORY_ITEMS, items => {
        return [...(items ?? []), ...data]
      })

      toast.success({ message: ['Квиток видалено'] })
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
