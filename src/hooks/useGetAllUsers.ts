import { useQuery } from 'react-query'

import { CacheKeys } from 'src/constants'
import getAllUsersApi from 'src/services/api/getAllUsersApi'

const useGetAllUsers = () => {
  const { isLoading, data } = useQuery({
    queryKey: CacheKeys.ALL_USERS,
    queryFn: getAllUsersApi,
  })

  return { isLoading, data }
}

export default useGetAllUsers
