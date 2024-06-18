import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { LocalStorageKey, STALE_TIME } from 'src/constants'
import { RoutesPath } from 'src/router/routes'
import Auth from 'src/services/api/Auth'

export const useCheckAuth = () => {
  const navigate = useNavigate()

  const { data, error, isError, isLoading, isSuccess } = useQuery({
    staleTime: STALE_TIME,
    queryFn: Auth.refreshToken,
    onSuccess: data => {
      localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, data.accessToken)
    },
    onError: () => {
      navigate(RoutesPath.HOME)
    },
  })

  return { data, error, isError, isLoading, isSuccess }
}
