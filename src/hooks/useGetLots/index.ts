import { useMutation } from 'react-query'
import Lot from 'src/services/api/Lot'

export const useGetLots = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationFn: Lot.getLots,
  })

  return {
    mutate,
    data: data?.lots ?? [],
    totalPageByeLots: data?.totalPages,
    isLoading,
  }
}
