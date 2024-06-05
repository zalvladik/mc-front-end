import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useGetUserItemTickets } from 'src/hooks/useGetUserItemTickets'

import { Modals } from 'src/features/Modals/constants'

export const useUserItemTicket = () => {
  const { data = [], isLoading } = useGetUserItemTickets()
  const { onOpen } = useModals()

  const openItemsInTicketModal = (itemTicketId: number): void => {
    onOpen({ name: Modals.ITEM_TICKETS, data: { itemTicketId } })
  }

  return { data, isLoading, openItemsInTicketModal }
}
