import AdvancementsMap from 'src/components/AdvancementsMap'
import ButtonModalClose from 'src/components/ButtonModalClose'

import type { ModalAdvancementsProps } from 'src/features/Modals/ModalAdvancements/types'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

const ModalAdvancements = ({
  isOpen,
  closeModal,
  data,
}: ModalAdvancementsProps): JSX.Element => {
  return (
    <SettingsModalsLayout
      isOpen={isOpen}
      closeModal={() => {}}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
    >
      <ButtonModalClose onClose={closeModal} />
      <AdvancementsMap username={data.username} />
    </SettingsModalsLayout>
  )
}

export default ModalAdvancements
