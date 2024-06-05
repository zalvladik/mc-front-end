import type { ValueOf } from 'src/types'

import type { Modals } from 'src/features/Modals/constants'
import type { ModalsPropsT } from 'src/features/Modals/types'

export type ModalContextT = {
  modal: ModalDataT
  onClose: () => void
  onOpen: (modal: ModalDataT) => void
}

export type ModalDataT = {
  name: ValueOf<Modals> | ''
  data?: ModalsPropsT
}
