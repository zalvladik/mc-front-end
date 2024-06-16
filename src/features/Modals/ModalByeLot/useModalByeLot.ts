import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useGetMoneyFromUserInventory } from 'src/hooks/useGetMoneyFromUserInventory'

export const useModalByeLot = () => {
  const { onClose } = useModals()

  const { data } = useGetMoneyFromUserInventory()

  return { onClose, userMoney: data?.money ?? 0 }
}
