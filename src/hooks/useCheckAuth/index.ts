import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { LocalStorageKey, STALE_TIME } from 'src/constants'
import { RoutesPath } from 'src/router/routes'
import Auth from 'src/services/api/Auth'

export const useCheckAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { data, error, isError, isLoading, isSuccess } = useQuery({
    staleTime: STALE_TIME,
    queryFn: Auth.refreshToken,
    onSuccess: data => {
      if (/\/auth|\/sign_up|\/sign_in/.test(location.pathname)) {
        navigate(RoutesPath.PROFILE)
      }

      localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, data.accessToken)
    },
    onError: () => {
      navigate(RoutesPath.SIGN_IN)
    },
  })

  return { data, error, isError, isLoading, isSuccess }
}
