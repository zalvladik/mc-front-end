import { api } from 'src/configs/ky'

import { FetchEndpoint } from 'src/constants'
import type { getAllUsersApiT } from 'src/services/types'

const getAllUsersApi = async (): Promise<getAllUsersApiT[]> => {
  return api.get(FetchEndpoint.USER_ADVANCEMENTS).json()
}

export default getAllUsersApi
