import type { ItemT } from 'src/services/api/UserInventory/types'

import type { ModalDialogProps } from 'src/features/Modals/types'

export type ModalByeLotProps = {
  data: { realname: string; item: ItemT; price: number; id: number }
} & ModalDialogProps
