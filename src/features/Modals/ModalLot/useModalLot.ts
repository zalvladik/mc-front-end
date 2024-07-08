import { useByeLotItem } from 'src/hooks/useByeLotItem'
import { useByeLotShulker } from 'src/hooks/useByeLotShulker'
import { useDeleteUserLot } from 'src/hooks/useDeleteUserLot'
import { useGetShulkerItems } from 'src/hooks/useGetShulkerItems'

import type { UseModalLotProps } from 'src/features/Modals/ModalLot/types'

export const useModalLot = ({
  isDeleteLot,
  afterSubmit,
  isShulker = false,
  shulkerId,
}: UseModalLotProps) => {
  const { mutate: mutateDelete, isLoading: isLoadingDelete } =
    useDeleteUserLot(afterSubmit)
  const { mutate: mutateByeItem, isLoading: isLoadingByeItem } =
    useByeLotItem(afterSubmit)
  const { mutate: mutateByeShulker, isLoading: isLoadingByeShulker } =
    useByeLotShulker(afterSubmit)

  const { data: dataShulkerItems = [], isLoading: isLoadingShulkerItems } =
    useGetShulkerItems(shulkerId, isShulker)

  const toogleLot = (id: number): void => {
    if (isDeleteLot) {
      mutateDelete(id)

      return
    }

    if (isShulker) {
      mutateByeShulker({ lotId: id })

      return
    }

    mutateByeItem({ lotId: id })
  }

  return {
    toogleLot,
    isLoading: isLoadingByeItem || isLoadingDelete || isLoadingByeShulker,
    dataShulkerItems,
    isLoadingShulkerItems,
  }
}
