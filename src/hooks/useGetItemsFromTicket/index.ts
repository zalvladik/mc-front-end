import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import ItemTicket from 'src/services/api/ItemTicket'

export const useGetItemsFromTicket = (itemTicketId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: [CacheKeys.ITEM_TICKET, itemTicketId],
    queryFn: () => ItemTicket.getItems(itemTicketId),
  })

  return { data, isLoading }
}
