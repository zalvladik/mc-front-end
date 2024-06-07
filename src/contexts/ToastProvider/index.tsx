import type { FC, ReactNode } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { ToastContext } from 'src/contexts'
import { INITIAL_PARAMS } from 'src/contexts/ToastProvider/constants'
import type {
  ToastContextDataT,
  ToastHandlersParamsT,
  ToastStateT,
} from 'src/contexts/ToastProvider/types'

import Toast from 'src/features/Toast'

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastStateT>(INITIAL_PARAMS)

  const handleClose = (): void => setToast(INITIAL_PARAMS)

  const handleToast = useCallback(
    (status: ToastStateT['status']) => (props: ToastHandlersParamsT) => {
      setToast({
        ...INITIAL_PARAMS,
        status,
        width: props.width + 430,
        height: props.height + 110,
        message: props.message,
        isOpen: true,
      })
    },
    [],
  )

  const contextData = useMemo<ToastContextDataT>(
    () => ({
      error: handleToast('error'),
      warning: handleToast('warning'),
      success: handleToast('success'),
      info: handleToast('info'),
    }),
    [handleToast],
  )

  return (
    <ToastContext.Provider value={contextData}>
      {children}
      <Toast {...toast} onClose={handleClose} />
    </ToastContext.Provider>
  )
}
