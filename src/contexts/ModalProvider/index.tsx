import { useMemo, useState } from 'react'
import { ModalContext } from 'src/contexts'
import { initialModalData } from 'src/contexts/ModalProvider/constants'
import type { ModalContextT, ModalDataT } from 'src/contexts/ModalProvider/types'
import type { ReactChildrenT } from 'src/types'

import Modals from 'src/features/Modals'

const ProvideModals = ({ children }: ReactChildrenT): JSX.Element => {
  const [modalData, setModalData] = useState<ModalDataT>(initialModalData)

  const onClose = (): void => {
    setModalData(initialModalData)
  }

  const onOpen = (modal: ModalDataT): void => {
    setModalData(modal)
  }

  const providerValue: ModalContextT = useMemo(
    () => ({ onClose, onOpen, modal: modalData }),
    [modalData],
  )

  return (
    <ModalContext.Provider value={providerValue}>
      {children} <Modals />
    </ModalContext.Provider>
  )
}

export default ProvideModals
