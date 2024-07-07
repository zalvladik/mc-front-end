import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useUser } from 'src/contexts/UserProvider/useUser'
import type { LotT } from 'src/services/api/Lot/types'

import { Modals } from 'src/features/Modals/constants'

export const useAuctionItemList = () => {
  const { onOpen } = useModals()
  const { user, updateUserMoney } = useUser()
  const { totalPages, currentPage, isLoadingByeLots, dataByeLots, setCurrentPage } =
    useAuction()

  const openModal = (data: LotT) => {
    const afterSubmit = () => {
      if (user.username !== data.username) {
        updateUserMoney(user.money - data.price)
      }

      if (totalPages === currentPage && dataByeLots.length === 1) {
        setCurrentPage(totalPages - 1)
      }
    }

    onOpen({
      name: Modals.LOT,
      data: {
        ...data,
        isDeleteLot: user.username === data.username,
        userMoney: user.money,
        afterSubmit,
      },
    })
  }

  const itemSlotIconProps = { containerSize: 58, itemSize: 38 }

  return {
    openModal,
    itemSlotIconProps,
    user,
    isLoading: isLoadingByeLots,
    data: dataByeLots,
  }
}
