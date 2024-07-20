import type { UserT } from 'src/contexts/UserProvider/types'

import type { ModalDialogProps } from 'src/features/Modals/types'

export type ModalVipProps = {
  data: { user: UserT }
} & ModalDialogProps
