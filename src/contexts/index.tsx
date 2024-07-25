import { createContext } from 'react'
import type { ModalContextT } from 'src/contexts/ModalProvider/types'

export const ModalContext = createContext<ModalContextT | null>(null)
