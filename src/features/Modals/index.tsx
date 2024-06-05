import type { ReactPortal } from 'react'
import { createPortal } from 'react-dom'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import type { UnionToIntersection } from 'src/types'

import modalsList from 'src/features/Modals/modalsList'
import type { ModalsPropsT } from 'src/features/Modals/types'

const Modals = (): ReactPortal | null => {
  const { modal, onClose } = useModals()

  const Component = modalsList.find(({ name }) => name === modal.name)?.component

  return Component
    ? createPortal(
        <Component
          name={modal.name}
          isOpen={!!Component}
          closeModal={onClose}
          data={modal.data as UnionToIntersection<ModalsPropsT>}
        />,
        document.querySelector('#modal-root') as HTMLElement,
      )
    : null
}

export default Modals
