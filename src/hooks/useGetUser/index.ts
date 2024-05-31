import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { CacheKeys, defaultUser } from 'src/constants'
import { RoutesPath } from 'src/router/routes'
import User from 'src/services/api/User'

export const useGetUser = (isAuth: boolean) => {
  const navigate = useNavigate()
  const { data: user = defaultUser, isLoading } = useQuery({
    queryKey: CacheKeys.USER,
    enabled: isAuth,
    queryFn: User.get,
    onSuccess: () => {
      navigate(RoutesPath.PROFILE)
    },
    onError: (error: Error) => {
      console.error({ message: error.message, title: error.name })
    },
  })

  return { user, isUserLoading: isLoading }
}
