import { useContext } from 'react'
import { ToastContext } from 'src/contexts'
import type { ToastContextDataT } from 'src/contexts/ToastProvider/types'

export const useToast = (): ToastContextDataT => {
  const data = useContext(ToastContext)

  if (!data) {
    throw new Error('useToast was used outside of its Provider')
  }

  return data
}
