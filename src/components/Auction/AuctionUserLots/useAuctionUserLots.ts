import { useModals } from 'src/contexts/ModalProvider/useModals'
import type { LotT } from 'src/services/api/Lot/types'

import { Modals } from 'src/features/Modals/constants'
import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

export const useAuctionUserLots = () => {
  const { onOpen } = useModals()

  const { isLoadingUserLots, dataUserLots } = useAuction()

  const openModal = (data: LotT) => {
    onOpen({ name: Modals.LOT, data: { ...data, isDeleteLot: true } })
  }

  const itemSlotIconProps = { containerSize: 58, itemSize: 38 }

  return {
    openModal,
    itemSlotIconProps,
    isLoading: isLoadingUserLots,
    data: dataUserLots,
  }
}
