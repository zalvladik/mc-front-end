import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useGetItemsFromTicket } from 'src/hooks/useGetItemsFromTicket'

export const useModalItemsInTicket = (itemTicketId: number) => {
  const { onClose } = useModals()

  const { isLoading, data } = useGetItemsFromTicket(itemTicketId)

  return { onClose, isLoading, data }
}
