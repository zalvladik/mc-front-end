import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useLogout } from 'src/hooks/useLogout'

import { Modals } from 'src/features/Modals/constants'

const useProfilePage = () => {
  const { user } = useUser()
  const { onOpen } = useModals()

  const { mutate, isLoading } = useLogout()

  const openAdvancementsModal = (): void => {
    onOpen({ name: Modals.ADVANCEMENTS, data: { realname: user.realname } })
  }

  const logout = (): void => mutate()

  return {
    user,
    isLoading,
    logout,
    openAdvancementsModal,
  }
}

export default useProfilePage
