import { VipEnum } from 'src/types'

import ButtonModalClose from 'src/components/ButtonModalClose'

import { Container } from 'src/features/Modals/ModalItemsInTicket/styles'
import type { ModalVipProps } from 'src/features/Modals/ModalVip/types'
import { useModalVip } from 'src/features/Modals/ModalVip/useModalVip'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalVip = ({
  isOpen,
  closeModal,
  handleContainerClick,
  data,
}: ModalVipProps): JSX.Element => {
  const { afterSubmit } = data
  const { byeVip } = useModalVip({ afterSubmit })

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <Container onClick={handleContainerClick}>
        <div
          style={{ width: 100, height: 100, backgroundColor: 'red' }}
          onClick={() => {
            byeVip(VipEnum.IRON)
          }}
        />
      </Container>
    </SettingsModalsLayout>
  )
}

export default ModalVip
