import type { ToastStateT } from './types'

export const HIDE_DURATION = 2000

export const INITIAL_PARAMS: ToastStateT = {
  status: 'success',
  autoHideDuration: HIDE_DURATION,
  message: [''],
  isOpen: false,
  width: 430,
  height: 110,
  fontSize: 25,
}
