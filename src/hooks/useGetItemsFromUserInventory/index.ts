import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import UserInventory from 'src/services/api/UserInventory'

export const useGetItemsFromUserInventory = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: CacheKeys.USER_INVENTORY_ITEMS,
    queryFn: UserInventory.getItems,
  })

  return { data, isLoading, refetch, isRefetching }
}
