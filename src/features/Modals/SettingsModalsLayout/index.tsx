import type { CSSProperties } from 'react'
import { useEffect } from 'react'
import type { ReactChildrenT } from 'src/types'

import {
  ChildrenContainer,
  Container,
  Modal,
} from 'src/features/Modals/SettingsModalsLayout/styles'
import type { ModalDialogProps } from 'src/features/Modals/types'

type SettingsModalsLayoutProps = {
  style?: CSSProperties
} & Partial<ReactChildrenT> &
  Pick<ModalDialogProps, 'closeModal' | 'isOpen' | 'onConfirm'>

const SettingsModalsLayout = ({
  children,
  closeModal,
  style,
}: SettingsModalsLayoutProps): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <Modal style={style}>
      <Container onClick={closeModal}>
        <ChildrenContainer>{children}</ChildrenContainer>
      </Container>
    </Modal>
  )
}

export default SettingsModalsLayout
