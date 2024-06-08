import type { FC, ReactNode } from 'react'
import { useCallback, useMemo, useState } from 'react'
import { ToastContext } from 'src/contexts'
import { INITIAL_PARAMS } from 'src/contexts/ToastProvider/constants'
import type {
  ToastContextDataT,
  ToastHandlersParamsT,
  ToastStateT,
  ToastType,
} from 'src/contexts/ToastProvider/types'

import Toast from 'src/features/Toast'

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastStateT>(INITIAL_PARAMS)

  const handleClose = (): void => setToast({ ...toast, isOpen: false })

  const handleToast = useCallback(
    (status: ToastType) => (props: ToastHandlersParamsT) => {
      setToast({
        ...INITIAL_PARAMS,
        status,
        fontSize: props.fontSize ?? INITIAL_PARAMS.fontSize,
        width: props.width + 430,
        height: props.height + 110,
        message: props.message,
        isOpen: true,
        autoHideDuration: props.autoHideDuration
          ? props.autoHideDuration * 1000
          : INITIAL_PARAMS.autoHideDuration * 1000,
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
