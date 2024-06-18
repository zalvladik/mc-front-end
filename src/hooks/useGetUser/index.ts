import { useQuery } from 'react-query'
import { CacheKeys, defaultUser } from 'src/constants'
import User from 'src/services/api/User'

export const useGetUser = (isAuth: boolean) => {
  const { data: user = defaultUser, isLoading } = useQuery({
    queryKey: CacheKeys.USER,
    enabled: isAuth,
    queryFn: User.get,
  })

  return { user, isUserLoading: isLoading }
}
