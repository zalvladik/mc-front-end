import { useGetShulkerItems } from 'src/hooks/useGetShulkerItems'

export const useModalItemsInShulker = (shulkerId: number) => {
  const { data = [], isLoading } = useGetShulkerItems(shulkerId)

  return {
    data,
    isLoading,
  }
}
