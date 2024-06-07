import type { AlertColor } from 'src/contexts/ToastProvider/types'

export type ToastProps = {
  width?: number
  height?: number
  fontSize?: number
  onClose: () => void
  message: string[]
  isOpen: boolean
  autoHideDuration?: number
  status: AlertColor
}
