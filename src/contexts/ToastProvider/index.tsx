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

  /* eslint-disable react/prop-types */
  const handleToast = useCallback(
    (status: ToastType) =>
      ({ ...rest }: ToastHandlersParamsT) => {
        setToast({
          ...INITIAL_PARAMS,
          status,
          fontSize: rest.fontSize ?? INITIAL_PARAMS.fontSize,
          isOpen: rest.isOpen ?? true,
          message: rest.message,
          autoHideDuration: rest.autoHideDuration
            ? rest.autoHideDuration * 1000
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
