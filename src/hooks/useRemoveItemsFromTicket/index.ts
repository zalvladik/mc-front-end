import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import ItemTicket from 'src/services/api/ItemTicket'
import type { ItemT } from 'src/services/api/UserInventory/types'

export const useRemoveItemsFromTicket = (
  itemTicketId: number,
  itemIds: number[],
) => {
  const queryClient = useQueryClient()
  const toast = useToast()

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
      toast.success({
        message: ['Предмети перенесені', 'в інвентар'],
        height: 20,
        width: 40,
      })
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
