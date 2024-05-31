import type { Modals } from 'src/features/Modals/constants'
import type modalsList from 'src/features/Modals/modalsList'
import type { ValueOf } from 'src/types'

type ExtractData<T> = T extends [{ data: infer D }] ? D : never

export type ModalsPropsT = ExtractData<
  Parameters<(typeof modalsList)[number]['component']>
>

export type ModalDialogProps = {
  isOpen: boolean
  name: ValueOf<Modals>
  closeModal?: () => void
  onConfirm?: () => void
  data?: unknown
}
