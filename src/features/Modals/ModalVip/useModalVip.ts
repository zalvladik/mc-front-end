import { useState } from 'react'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useByeVip } from 'src/hooks/useByeVip'
import type { VipEnum } from 'src/types'

export const useModalVip = () => {
  const [selectedVipType, setSelectedVipType] = useState<VipEnum>()
  const { isLoading, mutate } = useByeVip()
  const toast = useToast()

  const byeVip = () => {
    if (!selectedVipType) return

    mutate(selectedVipType)
  }

  const showInfo = () => {
    toast.info({
      message: [
        'Завдяки VIP, ви збільшуєте кількість:',
        'лотів, предметів, шалкерів.',
        'Він триває 7 днів',
        'VIP можна покращити після покупки',
      ],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  return { byeVip, showInfo, selectedVipType, setSelectedVipType }
}
