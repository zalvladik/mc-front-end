import { useDeleteUserLot } from 'src/hooks/useDeleteUserLot'

export const useAuctionUserLots = () => {
  const { mutate } = useDeleteUserLot()

  const deleteUserLot = (id: number) => {
    mutate(id)
  }

  return { deleteUserLot }
}
