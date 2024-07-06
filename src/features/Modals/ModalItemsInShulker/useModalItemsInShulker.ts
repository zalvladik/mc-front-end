import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useGetShulkerItems } from 'src/hooks/useGetShulkerItems'

export const useModalItemsInShulker = (shulkerId: number) => {
  const { data = [], isLoading } = useGetShulkerItems(shulkerId)
  const { onClose } = useModals()

  return {
    data,
    isLoading,
    onClose,
  }
}
