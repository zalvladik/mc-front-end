import type { UserT } from 'src/contexts/UserProvider/types'

import type { ModalDialogProps } from 'src/features/Modals/types'

export type UseModalVipProps = {
  afterSubmit: (value: UserT) => void
}

export type ModalVipProps = {
  data: { afterSubmit: (value: UserT) => void }
} & ModalDialogProps
