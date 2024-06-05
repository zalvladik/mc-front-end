import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import getUserAdvancementsApi from 'src/services/api/getUserAdvancementsApi'

export const useUserAdvancements = (realname: string) => {
  const { isLoading, data } = useQuery({
    queryKey: [CacheKeys.USER_ADVANCEMENTS, realname],
    queryFn: () => getUserAdvancementsApi(realname),
  })

  return { isLoading, data }
}
