import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import User from 'src/services/api/Items'

export const useGetItemsFromUser = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: CacheKeys.USER_ITEMS,
    queryFn: User.getItems,
  })

  return { data, isLoading, refetch, isRefetching }
}
