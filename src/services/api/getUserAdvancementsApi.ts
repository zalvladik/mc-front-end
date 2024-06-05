import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { GetUserAdvancementsApiT } from 'src/services/types'

const getUserAdvancementsApi = async (
  realname: string,
): Promise<GetUserAdvancementsApiT> => {
  return api.get(`${FetchEndpoint.USER_ADVANCEMENTS}/${realname}`).json()
}

export default getUserAdvancementsApi
