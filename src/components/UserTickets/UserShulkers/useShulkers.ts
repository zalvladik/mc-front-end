import { useEffect, useRef } from 'react'
import { useItemHoverDescription } from 'src/contexts/ItemHoverDescriptionProvider/useItemHoverDescription'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { getVipParams } from 'src/helpers/getVipParams'
import { useGetUserShulkers } from 'src/hooks/useGetUserShulkers'

import { Modals } from 'src/features/Modals/constants'

export const useShulkers = () => {
  const { user } = useUser()
  const { data = [], isLoading } = useGetUserShulkers()
  const toast = useToast()

  const { onOpen } = useModals()

  const { vipShulkerCount } = getVipParams(user.vip)

  const openModal = (shulkerId: number): void => {
    onOpen({ name: Modals.SHULKER_ITEMS, data: { shulkerId } })
  }

  const showInfo = () => {
    toast.info({
      message: [
        'Ви можете продавати шалкери.',
        'Щоб забрати шалкер,',
        'Пропишіть цю команду в чаті серверу:',
        '/trade шалкер(забрати) id ',
      ],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  const { onVisible, offVisible } = useItemHoverDescription()
  const shulkerIconRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLButtonElement

      if (!element) return

      const { top, left, width, height } = element.getBoundingClientRect()
      const title = element.getAttribute('data-display-name') ?? ''

      onVisible({
        description: null,
        title,
        isVisible: true,
        topSlotIcon: top,
        leftSlotIcon: left,
        heightSlotIcon: height,
        widthSlotIcon: width,
        durability: null,
      })
    }

    const handleMouseLeave = () => {
      offVisible()
    }

    shulkerIconRefs.current.forEach(element => {
      if (element) {
        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
      }
    })

    return () => {
      shulkerIconRefs.current.forEach(element => {
        if (element) {
          element.removeEventListener('mouseenter', handleMouseEnter)
          element.removeEventListener('mouseleave', handleMouseLeave)
        }
      })
    }
  }, [data])

  return { data, isLoading, showInfo, shulkerIconRefs, openModal, vipShulkerCount }
}
