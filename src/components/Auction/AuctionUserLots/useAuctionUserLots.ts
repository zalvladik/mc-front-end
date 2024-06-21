import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useDeleteUserLot } from 'src/hooks/useDeleteUserLot'
import type { LotT } from 'src/services/api/Lot/types'

import { Modals } from 'src/features/Modals/constants'

export const useAuctionUserLots = () => {
  const { mutate } = useDeleteUserLot()
  const { onOpen } = useModals()

  const deleteUserLot = (id: number) => {
    mutate(id)
  }

  const openModal = (data: LotT) => {
    onOpen({ name: Modals.BYE_LOT, data: { ...data, isByeFragment: false } })
  }

  const itemSlotIconProps = { itemGlowSizes: { containerSize: 58, itemSize: 38 } }

  return { deleteUserLot, openModal, itemSlotIconProps }
}
