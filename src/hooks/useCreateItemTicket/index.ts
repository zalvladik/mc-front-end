import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import type { ItemTicketT } from 'src/services/api/Items/types'
import ItemTicket from 'src/services/api/ItemTicket'
import type { ErrorResponse } from 'src/types'

export const useCreateItemTicket = (payload: number[]) => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: ItemTicket.post,
    onSuccess: data => {
      queryClient.setQueryData<ItemTicketT[]>(
        CacheKeys.USER_ITEM_TICKETS,
        tickets => [...(tickets ?? []), data],
      )

      queryClient.setQueryData<ItemTicketT[]>(CacheKeys.USER_ITEMS, tickets => [
        ...(tickets?.filter(item => !payload.includes(item.id)) ?? []),
      ])

      toast.success({ message: ['Квиток створено'] })
    },
    onError: (error: Error) => {
      if (error.message.startsWith('{') && error.message.endsWith('}')) {
        const data: ErrorResponse = JSON.parse(error.message)

        toast.error({ message: data.messages })

        return
      }

      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
