import { useModals } from 'src/contexts/ModalProvider/useModals'

export const useModalAdvancements = () => {
  const { onClose } = useModals()

  return { onClose }
}
