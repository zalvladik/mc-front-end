import { useModals } from 'src/contexts/ModalProvider/useModals'
import type { LotT } from 'src/services/api/Lot/types'

import { Modals } from 'src/features/Modals/constants'

export const useAuctionItemList = () => {
  const { onOpen } = useModals()

  const openModal = (data: LotT) => {
    onOpen({ name: Modals.BYE_LOT, data })
  }

  const itemSlotIconProps = { itemGlowSizes: { containerSize: 58, itemSize: 38 } }

  return { openModal, itemSlotIconProps }
}
