import type { ToastType } from 'src/contexts/ToastProvider/types'

export type ToastProps = {
  fontSize: number
  onClose: () => void
  message: string[]
  isOpen: boolean
  autoHideDuration?: number
  status: ToastType
}
