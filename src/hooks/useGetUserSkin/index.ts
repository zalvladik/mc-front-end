import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import User from 'src/services/api/User'

export const useGetUserSkin = () => {
  const { data, isLoading } = useQuery({
    queryKey: CacheKeys.USER_SKIN,
    queryFn: User.getSkin,
    onSuccess: () => {},
  })

  return { data, isLoading }
}
