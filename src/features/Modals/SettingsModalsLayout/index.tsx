import type { ReactNode } from 'react'
import type { ModalDialogProps } from 'src/features/Modals/types'
import type { ReactChildrenT } from 'src/types'

import {
  Modal,
  Container,
  ChildrenContainer,
} from 'src/features/Modals/SettingsModalsLayout/styles'

type SettingsModalsLayoutProps = {
  ButtonStyles?: React.CSSProperties
  title?: string
  description?: string | JSX.Element
  isLoading?: boolean
  Button?: ReactNode
} & Partial<ReactChildrenT> &
  Pick<ModalDialogProps, 'closeModal' | 'isOpen' | 'onConfirm'>

const SettingsModalsLayout = ({
  children,
  closeModal,
}: SettingsModalsLayoutProps): JSX.Element => {
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    <Modal onClick={closeModal}>
      <Container onClick={handleContainerClick}>
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </Modal>
  )
}

export default SettingsModalsLayout
