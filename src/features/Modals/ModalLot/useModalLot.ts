import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useByeLot } from 'src/hooks/useByeLot'
import { useDeleteUserLot } from 'src/hooks/useDeleteUserLot'

export const useModalLot = (isDeleteLot: boolean) => {
  const { onClose } = useModals()

  const { mutate: mutateDelete, isLoading: isLoadingDelete } = useDeleteUserLot()
  const { mutate: mutateBye, isLoading: isLoadingBye } = useByeLot()

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
