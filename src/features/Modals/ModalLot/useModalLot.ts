import { useByeLot } from 'src/hooks/useByeLot'
import { useDeleteUserLot } from 'src/hooks/useDeleteUserLot'

import type { UseModalLotProps } from 'src/features/Modals/ModalLot/types'

export const useModalLot = ({ isDeleteLot, afterSubmit }: UseModalLotProps) => {
  const { mutate: mutateDelete, isLoading: isLoadingDelete } =
    useDeleteUserLot(afterSubmit)
  const { mutate: mutateBye, isLoading: isLoadingBye } = useByeLot(afterSubmit)

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
  }
}
