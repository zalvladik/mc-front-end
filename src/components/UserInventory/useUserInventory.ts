import { useUser } from 'src/contexts/UserProvider/useUser'
import { useGetUserInventory } from 'src/hooks/useGetUserInventory'

export const useUserInventory = () => {
  const { user } = useUser()

  const { data, isLoading, refetch } = useGetUserInventory()

  return { data, isLoading, refetch }
}
