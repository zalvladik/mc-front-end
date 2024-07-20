import { useUser } from 'src/contexts/UserProvider/useUser'
import { useGetItemsFromUser } from 'src/hooks/useGetItemsFromUser'

export const useInventoryHeader = () => {
  const { user } = useUser()

  const { data } = useGetItemsFromUser()

  return { countItems: data?.length, user }
}
