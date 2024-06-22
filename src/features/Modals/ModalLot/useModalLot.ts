import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useByeLot } from 'src/hooks/useByeLot'
import { useDeleteUserLot } from 'src/hooks/useDeleteUserLot'
import { useGetMoneyFromUserInventory } from 'src/hooks/useGetMoneyFromUserInventory'

export const useModalLot = () => {
  const { onClose } = useModals()

  const { mutate, isLoading: isLoadingDelete } = useDeleteUserLot()
  const { mutate: mutateByeLot } = useByeLot()

  const deleteUserLot = (id: number) => {
    mutate(id)
  }

  const byeLot = (id: number) => {
    mutateByeLot({ lotId: id })
  }

  const { data } = useGetMoneyFromUserInventory()

  return {
    deleteUserLot,
    onClose,
    byeLot,
    userMoney: data?.money ?? 0,
    isLoadingDelete,
  }
}
