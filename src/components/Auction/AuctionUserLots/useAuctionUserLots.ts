import { useAuction } from 'src/contexts/AuctionProvider/useAuction'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import type { LotT } from 'src/services/api/Lot/types'

import { Modals } from 'src/features/Modals/constants'

export const useAuctionUserLots = () => {
  const { onOpen } = useModals()

  const {
    isLoadingUserLots,
    dataUserLots,
    setCurrentPage,
    currentPage,
    totalPages,
  } = useAuction()

  const afterSubmit = () => {
    if (totalPages === currentPage && dataUserLots.length % 8 === 1) {
      setCurrentPage(totalPages - 1)
    }
  }

  const openModal = (data: LotT) => {
    onOpen({ name: Modals.LOT, data: { ...data, isDeleteLot: true, afterSubmit } })
  }

  const itemSlotIconProps = { containerSize: 58, itemSize: 38 }

  return {
    openModal,
    itemSlotIconProps,
    isLoading: isLoadingUserLots,
    data: dataUserLots,
  }
}
