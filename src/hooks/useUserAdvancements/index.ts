import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Advancements from 'src/services/api/Advancements'

export const useUserAdvancements = (username: string) => {
  const { isLoading, data } = useQuery({
    queryKey: [CacheKeys.USER_ADVANCEMENTS, username],
    queryFn: () => Advancements.getUserAdvancementsApi(username),
  })

  return { isLoading, data }
}
