import { useQuery } from 'react-query'

import { CacheKeys } from 'src/constants'
import UserInventory from 'src/services/api/UserInventory'

export const useGetUserInventory = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: CacheKeys.USER_INVENTORY,
    queryFn: UserInventory.get,
  })

  return { data, isLoading, refetch }
}
