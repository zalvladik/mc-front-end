import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import ItemTicket from 'src/services/api/ItemTicket'
import type { ItemT } from 'src/services/api/UserInventory/types'

export const useRemoveItemsFromTicket = (
  itemTicketId: number,
  itemIds: number[],
) => {
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: () => ItemTicket.removeItems(itemIds),
    onSuccess: data => {
      queryClient.setQueryData<ItemT[]>(
        [CacheKeys.ITEM_TICKET, itemTicketId],
        items => {
          return items!.filter(
            item => !data.find(deletedItem => deletedItem.id === item.id),
          )
        },
      )

      queryClient.setQueryData<ItemT[]>(CacheKeys.USER_INVENTORY_ITEMS, items => {
        return [...(items ?? []), ...data]
      })
    },
  })

  return { mutate, data, isLoading }
}
