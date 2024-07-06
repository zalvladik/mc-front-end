import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Shulker from 'src/services/api/Shulker'

export const useGetShulkerItems = (shulkerId: number) => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: [CacheKeys.USER_SHULKER_ITEMS, shulkerId],
    queryFn: () => Shulker.getShulkerItems(shulkerId),
  })

  return { data, isLoading, refetch, isRefetching }
}
