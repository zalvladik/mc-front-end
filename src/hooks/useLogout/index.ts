import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { RoutesPath } from 'src/router/routes'
import Auth from 'src/services/api/Auth'

export const useLogout = () => {
  const navigate = useNavigate()
  const client = useQueryClient()

  const { mutate, error, isError, isLoading, isSuccess } = useMutation({
    mutationFn: Auth.logout,
    onSuccess: () => {
      client.clear()
      localStorage.clear()
      sessionStorage.clear()

      navigate(RoutesPath.HOME)
    },
  })

  return { mutate, error, isError, isLoading, isSuccess }
}
