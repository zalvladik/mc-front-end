import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import ItemTicket from 'src/services/api/ItemTicket'
import type { ItemT, ItemTicketT } from 'src/services/api/UserInventory/types'
import type { ErrorResponse } from 'src/types'

export const useCreateItemTicket = () => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: ItemTicket.post,
    onSuccess: data => {
      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_INVENTORY_ITEMS, items =>
        items!.filter(item => !data.items.includes(item.id)),
      )

      queryClient.setQueryData<ItemTicketT[]>(
        CacheKeys.USER_INVENTORY_ITEM_TICKETS,
        tickets => [...(tickets ?? []), data],
      )

      toast.success({ message: ['Квиток створено'] })
    },
    onError: (error: Error) => {
      if (error.message.startsWith('{') && error.message.endsWith('}')) {
        const data: ErrorResponse = JSON.parse(error.message)

        toast.error({ message: data.messages, height: 20, width: -50 })

        return
      }

      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
