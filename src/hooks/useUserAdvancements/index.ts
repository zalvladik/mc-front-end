import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Advancements from 'src/services/api/Advancements'

export const useUserAdvancements = (realname: string) => {
  const { isLoading, data } = useQuery({
    queryKey: [CacheKeys.USER_ADVANCEMENTS, realname],
    queryFn: () => Advancements.getUserAdvancementsApi(realname),
  })

  return { isLoading, data }
}
