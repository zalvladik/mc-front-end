import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { LocalStorageKey } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { RoutesPath } from 'src/router/routes'
import Auth from 'src/services/api/Auth'
import type { AuthResponseT, CredentialsT } from 'src/services/api/Auth/types'

export const useLogin = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const {
    mutate,
    error,
    isError,
    isLoading,
    isSuccess,
    data: user,
  } = useMutation<AuthResponseT, Error, CredentialsT>({
    mutationFn: Auth.login,
    onSuccess: data => {
      localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, data.accessToken)
      toast.success({ message: ['Успішна авторизація'], width: 30 })
      navigate(RoutesPath.PROFILE)
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, error, isError, isLoading, isSuccess, user }
}
