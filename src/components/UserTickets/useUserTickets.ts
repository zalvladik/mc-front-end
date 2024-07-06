import { useState } from 'react'

export const useUserTickets = () => {
  const [isShulkerFragment, setIsShulkerFragment] = useState(false)

  return {
    isShulkerFragment,
    setIsShulkerFragment,
  }
}
