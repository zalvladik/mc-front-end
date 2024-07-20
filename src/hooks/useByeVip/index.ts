import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { refetchToken } from 'src/hooks/useRefetchToken'
import Vip from 'src/services/api/Vip'
import type { VipEnum } from 'src/types'

export const useByeVip = () => {
  const { onClose } = useModals()

  const queryClient = useQueryClient()

  const toast = useToast()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: (vip: VipEnum) => Vip.byeVip(vip),
    onSuccess: async () => {
      toast.success({ message: ['Vip успішно куплено !'] })

      const userData = await refetchToken()

      queryClient.setQueryData(CacheKeys.USER, userData)
      onClose()
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
