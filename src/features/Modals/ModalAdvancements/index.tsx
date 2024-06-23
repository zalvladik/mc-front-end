import AdvancementsMap from 'src/components/AdvancementsMap'
import ButtonModalClose from 'src/components/ButtonModalClose'

import type { ModalAdvancementsProps } from 'src/features/Modals/ModalAdvancements/types'
import { useModalAdvancements } from 'src/features/Modals/ModalAdvancements/useModalAdvancements'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalAdvancements = ({
  isOpen,
  closeModal,
  data,
}: ModalAdvancementsProps): JSX.Element => {
  const { onClose } = useModalAdvancements()

  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={closeModal}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={onClose} />
      <AdvancementsMap username={data.username} />
    </SettingsModalsLayout>
  )
}

export default ModalAdvancements
