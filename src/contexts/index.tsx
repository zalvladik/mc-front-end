import { createContext } from 'react'
import type { AuctionContextDataT } from 'src/contexts/AuctionProvider/types'
import type { ItemHoverDescriptionContextDataT } from 'src/contexts/ItemHoverDescriptionProvider/types'
import type { ModalContextT } from 'src/contexts/ModalProvider/types'
import type { ToastContextDataT } from 'src/contexts/ToastProvider/types'
import type { UserContextDataT } from 'src/contexts/UserProvider/types'

export const ModalContext = createContext<ModalContextT | null>(null)

export const UserContext = createContext<UserContextDataT | null>(null)

export const ToastContext = createContext<ToastContextDataT | null>(null)

export const AuctionContext = createContext<AuctionContextDataT | null>(null)

export const ItemHoverDescriptionContext =
  createContext<ItemHoverDescriptionContextDataT | null>(null)
