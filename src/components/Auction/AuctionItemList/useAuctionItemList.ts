import { useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
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

  const queryClient = useQueryClient()

  const openModal = (lot: LotT) => {
    const afterSubmit = () => {
      if (user.username !== lot.username) {
        updateUserMoney(user.money - lot.price)
      }

      if (totalPages === currentPage && dataByeLots.length === 1) {
        setCurrentPage(totalPages - 1)

        return
      }

      queryClient.invalidateQueries(CacheKeys.LOTS)
    }

    if (lot?.item) {
      onOpen({
        name: Modals.LOT,
        data: {
          ...lot,
          isDeleteLot: user.username === lot.username,
          userMoney: user.money,
          afterSubmit,
        },
      })
    }
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
