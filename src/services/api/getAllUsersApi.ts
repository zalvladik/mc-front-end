import type { getAllUsersApiT } from 'src/services/types'

import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'

const getAllUsersApi = async (): Promise<getAllUsersApiT[]> => {
  return api.get(FetchEndpoint.USER_ADVANCEMENTS).json()
}

export default getAllUsersApi
