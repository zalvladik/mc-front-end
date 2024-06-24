export type ToastType = 'success' | 'info' | 'warning' | 'error'

export type ToastPosition = 'right' | 'left' | 'center'

export type ToastContextDataT = {
  [key in ToastType]: (props: ToastHandlersParamsT) => void
}

export type ToastStateT = {
  status: ToastType
  autoHideDuration: number
  message: string[]
  isOpen: boolean

  fontSize: number
}

export type ToastHandlersParamsT = {
  status?: ToastType
  autoHideDuration?: number
  message: string[]
  isOpen?: boolean

  fontSize?: number
}
