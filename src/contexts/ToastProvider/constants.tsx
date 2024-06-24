import type { ToastStateT } from './types'

export const HIDE_DURATION = 2

export const INITIAL_PARAMS: ToastStateT = {
  status: 'success',
  autoHideDuration: HIDE_DURATION,
  message: [''],
  isOpen: false,
  fontSize: 25,
}
