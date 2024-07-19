import { useEffect } from 'react'
import { useByeVip } from 'src/hooks/useByeVip'
import type { VipEnum } from 'src/types'

import type { UseModalVipProps } from 'src/features/Modals/ModalVip/types'

export const useModalVip = ({ afterSubmit }: UseModalVipProps) => {
  const { data, isLoading, isSuccess, mutate } = useByeVip()

  useEffect(() => {
    if (data && isSuccess) {
      afterSubmit(data)
    }
  }, [data, isLoading, isSuccess])

  const byeVip = (vip: VipEnum) => {
    mutate(vip)
  }

  return { byeVip }
}
