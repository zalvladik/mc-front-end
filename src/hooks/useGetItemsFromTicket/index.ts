import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import ItemTicket from 'src/services/api/ItemTicket'

export const useGetItemsFromTicket = (itemTicketId: number) => {
  const toast = useToast()

  const { data, isLoading } = useQuery({
    queryKey: [CacheKeys.ITEM_TICKET, itemTicketId],
    queryFn: () => ItemTicket.getItems(itemTicketId),
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { data, isLoading }
}
