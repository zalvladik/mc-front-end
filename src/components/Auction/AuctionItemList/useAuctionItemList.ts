import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useUser } from 'src/contexts/UserProvider/useUser'
import type { LotT } from 'src/services/api/Lot/types'

import { Modals } from 'src/features/Modals/constants'

export const useAuctionItemList = () => {
  const { onOpen } = useModals()
  const { user, updateUserMoney } = useUser()

  const openModal = (data: LotT) => {
    onOpen({
      name: Modals.LOT,
      data: {
        ...data,
        isDeleteLot: user.username === data.username,
        userMoney: user.money,
        updateUserMoney,
      },
    })
  }

  const itemSlotIconProps = { containerSize: 58, itemSize: 38 }

  return { openModal, itemSlotIconProps, user }
}
