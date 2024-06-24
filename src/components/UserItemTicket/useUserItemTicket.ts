import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useGetUserItemTickets } from 'src/hooks/useGetUserItemTickets'

import { Modals } from 'src/features/Modals/constants'

export const useUserItemTicket = () => {
  const { data = [], isLoading } = useGetUserItemTickets()
  const { onOpen } = useModals()

  const toast = useToast()

  const openItemsInTicketModal = (itemTicketId: number): void => {
    onOpen({ name: Modals.ITEM_TICKETS, data: { itemTicketId } })
  }

  const showInfo = () => {
    toast.info({
      message: [
        'Квитки потрібні для того,',
        'щоб забрати предмети.',
        'Пропишіть цю команду в чаті серверу:',
        '/trade предмети(забрати) id ',
      ],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  return { data, isLoading, openItemsInTicketModal, showInfo }
}
