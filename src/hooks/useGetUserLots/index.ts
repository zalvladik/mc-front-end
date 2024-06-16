import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Lot from 'src/services/api/Lot'

export const useGetUserLots = () => {
  const { data, isLoading } = useQuery({
    queryFn: Lot.getUserLots,
    queryKey: CacheKeys.USER_LOTS,
  })

  return {
    userLots: data ?? [],
    isLoadingUserLots: isLoading,
  }
}
