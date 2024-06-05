import { useState } from 'react'

export const useItemTicket = (newTicketId?: number) => {
  const [oldTicketId, setOldTicketId] = useState<number>()
  const [isVisible, setIsVisible] = useState(false)

  if (oldTicketId !== newTicketId) {
    setIsVisible(true)
    setOldTicketId(newTicketId)
  }

  return { isVisible, setIsVisible }
}
