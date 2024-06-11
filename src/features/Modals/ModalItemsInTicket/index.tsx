import ButtonModalClose from 'src/components/ButtonModalClose'
import HoverDescription from 'src/components/HoverDescription'
import InventoryHeader from 'src/components/InventoryHeader'
import ItemList from 'src/components/ItemList'

import ItemCategoryFilter from 'src/features/ItemCategoryFilter'
import {
  Container,
  DeleteItemTicket,
} from 'src/features/Modals/ModalItemsInTicket/styles'
import { useModalItemsInTicket } from 'src/features/Modals/ModalItemsInTicket/useModalItemsInTicket'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

import type { ModalItemsInTicketProps } from './types'

const ModalItemsInTicket = ({
  isOpen,
  closeModal,
  data: { itemTicketId },
}: ModalItemsInTicketProps): JSX.Element => {
  const {
    onClose,
    deleteItemTicket,
    inventoryHeaderProps,
    itemCategoryFilterProps,
    itemListProps,
  } = useModalItemsInTicket(itemTicketId)

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={onClose} />
      <Container>
        <InventoryHeader {...inventoryHeaderProps}>
          <ItemCategoryFilter {...itemCategoryFilterProps} />
        </InventoryHeader>
        <ItemList {...itemListProps} />
        <DeleteItemTicket onClick={() => deleteItemTicket()}>
          <HoverDescription
            description={['Видалити квиток', 'і повернути всі премети']}
          />
        </DeleteItemTicket>
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalItemsInTicket
