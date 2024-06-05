import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import UserInventory from 'src/services/api/UserInventory'

export const useGetMoneyFromUserInventory = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: CacheKeys.USER_INVENTORY_MONEY,
    queryFn: UserInventory.getMoney,
  })

  return { data, isLoading, refetch, isRefetching }
}
