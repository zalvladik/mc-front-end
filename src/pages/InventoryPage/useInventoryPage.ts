import { useState } from 'react'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useLogout } from 'src/hooks/useLogout'

import { Modals } from 'src/features/Modals/constants'

const useInventoryPage = () => {
  const { user } = useUser()
  const { onOpen } = useModals()

  const [inventoryState, setInventoryState] = useState({
    isVisible: false,
    count: 0,
  })
  const [itemTicketState, setItemTicketState] = useState({
    isVisible: false,
    count: 0,
  })

  const { mutate, isLoading } = useLogout()

  const openAdvancementsModal = (): void => {
    onOpen({ name: Modals.ADVANCEMENTS, data: { realname: user.realname } })
  }

  const logout = (): void => mutate()

  return {
    isLoading,
    user,
    inventoryState,
    itemTicketState,
    logout,
    openAdvancementsModal,
    setInventoryState,
    setItemTicketState,
  }
}

export default useInventoryPage
