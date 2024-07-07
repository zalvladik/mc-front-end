import ButtonModalClose from 'src/components/ButtonModalClose'
import ItemList from 'src/components/ItemList'

import { Container } from 'src/features/Modals/ModalItemsInShulker/styles'
import { useModalItemsInShulker } from 'src/features/Modals/ModalItemsInShulker/useModalItemsInShulker'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

import type { ModalItemsInShulkerProps } from './types'

const ModalItemsInShulker = ({
  isOpen,
  closeModal,
  handleContainerClick,
  data: { shulkerId },
}: ModalItemsInShulkerProps): JSX.Element => {
  const { data, isLoading } = useModalItemsInShulker(shulkerId)

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container onClick={handleContainerClick}>
        <h1>Шалкер id: {shulkerId}</h1>
        <ItemList
          items={data}
          isLoading={isLoading}
          isNeedAreaSelect={false}
          itemSlotIconProps={{ containerSize: 104, itemSize: 64 }}
        />
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalItemsInShulker
