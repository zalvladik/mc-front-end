import { useMutation } from 'react-query'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import Vip from 'src/services/api/Vip'
import type { VipEnum } from 'src/types'

export const useByeVip = () => {
  const { onClose } = useModals()

  const toast = useToast()

  const { data, mutate, isLoading, isSuccess } = useMutation({
    mutationFn: (vip: VipEnum) => Vip.byeVip(vip),
    onSuccess: () => {
      toast.success({ message: ['Vip успішно куплено !'] })
      onClose()
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading, isSuccess }
}
