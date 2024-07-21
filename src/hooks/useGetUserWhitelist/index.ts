import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Whitelist from 'src/services/api/Whitelist'

export const useGetUserWhitelist = () => {
  const { data, isLoading } = useQuery({
    queryFn: Whitelist.getUserWhitelist,
    queryKey: CacheKeys.WHITELIST,
  })

  return { data, isLoading }
}
