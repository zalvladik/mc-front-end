import type { ItemT } from 'src/services/api/UserInventory/types'

import type { ModalDialogProps } from 'src/features/Modals/types'

export type ModalLotProps = {
  data: {
    realname: string
    item: ItemT
    price: number
    id: number
    isDeleteLot: boolean
  }
} & ModalDialogProps
