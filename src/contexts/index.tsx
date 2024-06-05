import { createContext } from 'react'
import type { ModalContextT } from 'src/contexts/ModalProvider/types'
import type { UserContextDataT } from 'src/contexts/UserProvider/types'

export const ModalContext = createContext<ModalContextT | null>(null)

export const UserContext = createContext<UserContextDataT | null>(null)
