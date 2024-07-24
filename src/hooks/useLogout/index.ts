import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { RoutesPath } from 'src/router/routes'
import Auth from 'src/services/api/Auth'

export const useLogout = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const client = useQueryClient()

  const { mutate, error, isError, isLoading, isSuccess } = useMutation({
    mutationFn: Auth.logout,
    onSuccess: () => {
      client.clear()
      localStorage.clear()
      sessionStorage.clear()
      toast.success({ message: ['Вихід з аккаунту'] })

      navigate(RoutesPath.SIGN_IN)
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, error, isError, isLoading, isSuccess }
}
