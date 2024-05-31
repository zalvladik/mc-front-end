import { useEffect, useRef, useState } from 'react'
import * as skinview3d from 'skinview3d'

import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { Modals } from 'src/features/Modals/constants'
import { useGetUserSkin } from 'src/hooks/useGetUserSkin'
import { useLogout } from 'src/hooks/useLogout'

const useProfilePage = () => {
  const { user } = useUser()
  const { onOpen } = useModals()

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [inventoryIsVisible, useInventoryIsVisible] = useState(false)

  const { data, isLoading } = useGetUserSkin()
  const { mutate } = useLogout()

  const openAdvancementsModal = (): void => {
    onOpen({ name: Modals.ADVANCEMENTS, data: { realname: user.realname } })
  }

  const logout = (): void => mutate()

  useEffect(() => {
    if (canvasRef.current && data) {
      const viewer = new skinview3d.SkinViewer({
        canvas: canvasRef.current,
        width: 400,
        height: 650,
        skin: data?.textures.SKIN.url,
        enableControls: true,
        animation: new skinview3d.IdleAnimation(),
      })

      return () => {
        viewer.dispose()
      }
    }
  }, [data])

  return {
    user,
    isLoading,
    canvasRef,
    inventoryIsVisible,
    logout,
    openAdvancementsModal,
    useInventoryIsVisible,
  }
}

export default useProfilePage
