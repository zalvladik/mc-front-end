import { useMutation } from 'react-query'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import type { UserT } from 'src/contexts/UserProvider/types'
import Vip from 'src/services/api/Vip'
import type { VipEnum } from 'src/types'

export const useByeVip = (afterSubmit: (value: UserT) => void) => {
  const { onClose } = useModals()

  const toast = useToast()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: (vip: VipEnum) => Vip.byeVip(vip),
    onSuccess: data => {
      toast.success({ message: ['Vip успішно куплено !'] })

      afterSubmit(data)
      onClose()
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
