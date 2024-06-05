import ButtonModalClose from 'src/components/ButtonModalClose'

import { useModalItemsInTicket } from 'src/features/Modals/ModalItemsInTicket/useModalItemsInTicket'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

import type { ModalItemsInTicketProps } from './types'

const ModalItemsInTicket = ({
  isOpen,
  closeModal,
  data: { itemTicketId },
}: ModalItemsInTicketProps): JSX.Element => {
  const { onClose } = useModalItemsInTicket(itemTicketId)

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={onClose} />
    </SettingsModalsLayout>
  )
}

export default ModalItemsInTicket
