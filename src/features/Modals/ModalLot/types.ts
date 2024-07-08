import type { ItemT } from 'src/services/api/Items/types'
import type { ShulkerT } from 'src/services/api/Shulker/types'

import type { ModalDialogProps } from 'src/features/Modals/types'

export type ModalLotProps = {
  data: {
    username: string
    item: ItemT | null
    shulker: ShulkerT | null
    price: number
    id: number
    isDeleteLot: boolean
    userMoney: number
    afterSubmit: (value: void) => void
  }
} & ModalDialogProps

export type UseModalLotProps = {
  isDeleteLot: boolean
  afterSubmit: (value: void) => void
  isShulker?: boolean
  shulker: ShulkerT
}
