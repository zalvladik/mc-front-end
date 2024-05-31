import { useModals } from 'src/contexts/ModalProvider/useModals'

import rulesForPay from 'src/locales/rulesForPay.json'

export const useModalPay = () => {
  const { onClose } = useModals()

  const [[category, rules]] = Object.entries(rulesForPay)

  return { onClose, category, rules }
}
