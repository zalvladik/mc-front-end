import type { ModalAdvancementsProps } from 'src/features/Modals/ModalAdvancements/types'

import AdvancementsMap from 'src/components/AdvancementsMap'
import { useModalAdvancements } from 'src/features/Modals/ModalAdvancements/useModalAdvancements'
import SettingsModalsLayout from 'src/features/Modals/SettingsModalsLayout'

import {
  AdvancementsMapWrapper,
  ButtonClose,
  CrossWrapper,
} from 'src/features/Modals/ModalAdvancements/styles'

const ModalAdvancements = ({
  isOpen,
  closeModal,
  data,
}: ModalAdvancementsProps): JSX.Element => {
  const { onClose } = useModalAdvancements()

  return (
    <SettingsModalsLayout isOpen={isOpen} closeModal={closeModal}>
      <ButtonClose onClick={() => onClose()}>
        <CrossWrapper>
          <div />
          <div />
        </CrossWrapper>
      </ButtonClose>
      <AdvancementsMapWrapper>
        <AdvancementsMap realname={data.realname} />
      </AdvancementsMapWrapper>
    </SettingsModalsLayout>
  )
}

export default ModalAdvancements
