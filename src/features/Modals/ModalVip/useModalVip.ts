import { useByeVip } from 'src/hooks/useByeVip'
import type { VipEnum } from 'src/types'

import type { UseModalVipProps } from 'src/features/Modals/ModalVip/types'

export const useModalVip = ({ afterSubmit }: UseModalVipProps) => {
  const { isLoading, mutate } = useByeVip(afterSubmit)

  const byeVip = (vip: VipEnum) => {
    mutate(vip)
  }

  return { byeVip }
}
