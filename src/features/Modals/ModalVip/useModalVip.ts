import { useState } from 'react'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useByeVip } from 'src/hooks/useByeVip'
import { useUpgradeVip } from 'src/hooks/useUpgradeVip'
import type { VipEnum } from 'src/types'

export const useModalVip = (isByeVip: boolean) => {
  const [selectedVipType, setSelectedVipType] = useState<VipEnum>()
  const { isLoading: isLoadingByeVip, mutate: mutateByeVip } = useByeVip()
  const { isLoading: isLoadingUpgradeVip, mutate: mutateUpgradeVip } =
    useUpgradeVip()
  const toast = useToast()

  const toogleVip = () => {
    if (!selectedVipType) return

    if (isByeVip) {
      mutateByeVip(selectedVipType)

      return
    }

    mutateUpgradeVip(selectedVipType)
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

  return {
    toogleVip,
    showInfo,
    selectedVipType,
    setSelectedVipType,
    isLoading: isLoadingByeVip || isLoadingUpgradeVip,
  }
}
