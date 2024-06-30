import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useByeLot } from 'src/hooks/useByeLot'
import { useDeleteUserLot } from 'src/hooks/useDeleteUserLot'

import type { UseModalLotProps } from 'src/features/Modals/ModalLot/types'

export const useModalLot = ({
  isDeleteLot,
  currentMoney,
  price,
  updateUserMoney,
}: UseModalLotProps) => {
  const { onClose } = useModals()

  const { mutate: mutateDelete, isLoading: isLoadingDelete } = useDeleteUserLot()
  const { mutate: mutateBye, isLoading: isLoadingBye } = useByeLot({
    currentMoney,
    price,
    updateUserMoney,
  })

  const toogleLot = (id: number): void => {
    if (isDeleteLot) {
      mutateDelete(id)

      return
    }

    mutateBye({ lotId: id })
  }

  return {
    toogleLot,
    onClose,

    isLoading: isLoadingBye || isLoadingDelete,
  }
}
