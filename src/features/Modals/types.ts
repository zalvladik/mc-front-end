import type { ValueOf } from 'src/types'

import type { Modals } from 'src/features/Modals/constants'
import type modalsList from 'src/features/Modals/modalsList'

type ExtractData<T> = T extends [{ data: infer D }] ? D : never

export type ModalsPropsT = ExtractData<
  Parameters<(typeof modalsList)[number]['component']>
>

export type ModalDialogProps = {
  isOpen: boolean
  handleContainerClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  name: ValueOf<Modals>
  closeModal: () => void
  onConfirm?: () => void
  data?: any
}
