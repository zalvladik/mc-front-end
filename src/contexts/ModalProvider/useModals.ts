import { useContext } from 'react'

import type { ModalContextT } from 'src/contexts/ModalProvider/types'

import { ModalContext } from 'src/contexts'

export const useModals = (): ModalContextT => {
  const data = useContext(ModalContext)

  if (!data) {
    throw new Error('useModals was used outside of its Provider')
  }

  return data
}
