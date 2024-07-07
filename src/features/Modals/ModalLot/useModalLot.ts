import { useByeLotItem } from 'src/hooks/useByeLotItem'
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
  const { mutate: mutateBye, isLoading: isLoadingBye } = useByeLotItem(afterSubmit)

  const { data: dataShulkerItems = [], isLoading: isLoadingShulkerItems } =
    useGetShulkerItems(shulkerId, isShulker)

  const toogleLot = (id: number): void => {
    if (isDeleteLot) {
      mutateDelete(id)

      return
    }

    mutateBye({ lotId: id })
  }

  return {
    toogleLot,
    isLoading: isLoadingBye || isLoadingDelete,
    dataShulkerItems,
    isLoadingShulkerItems,
  }
}
