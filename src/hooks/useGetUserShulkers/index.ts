import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Shulker from 'src/services/api/Shulker'

export const useGetUserShulkers = () => {
  const { data, isLoading } = useQuery({
    queryKey: CacheKeys.USER_SHULKERS,
    queryFn: Shulker.getShulkers,
  })

  return { data, isLoading }
}
