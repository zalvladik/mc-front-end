export type AlertColor = 'success' | 'info' | 'warning' | 'error'

export type ToastContextDataT = {
  [key in AlertColor]: (props: ToastHandlersParamsT) => void
}

export type ToastStateT = {
  status: AlertColor
  autoHideDuration?: number
  message: string[]
  isOpen: boolean
  width: number
  height: number
  fontSize: number
}

export type ToastHandlersParamsT = {
  status?: AlertColor
  autoHideDuration?: number
  message: string[]
  width?: number
  height?: number
  fontSize?: number
}
