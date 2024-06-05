import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { GetAllUsersApiT } from 'src/services/types'

const getAllUsersApi = async (): Promise<GetAllUsersApiT[]> => {
  return api.get(FetchEndpoint.USER_ADVANCEMENTS).json()
}

export default getAllUsersApi
