import { useQuery } from 'react-query'
import { CacheKeys } from 'src/constants'
import Advancements from 'src/services/api/Advancements'

const useGetAllUsers = () => {
  const { isLoading, data } = useQuery({
    queryKey: CacheKeys.ALL_USERS,
    queryFn: Advancements.getAllAdvancements,
  })

  return { isLoading, data }
}

export default useGetAllUsers
