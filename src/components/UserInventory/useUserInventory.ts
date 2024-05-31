import { useGetUserInventory } from 'src/hooks/useGetUserInventory'

export const useUserInventory = () => {
  const { data, isLoading, refetch } = useGetUserInventory()

  return { data, isLoading, refetch }
}
