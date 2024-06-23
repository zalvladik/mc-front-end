import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type {
  GetAllUsersAdvancementsT,
  GetUserAdvancementsApiT,
} from 'src/services/api/Advancements/types'

class Advancements {
  async getAllAdvancements(): Promise<GetAllUsersAdvancementsT[]> {
    return api.get(FetchEndpoint.USER_ADVANCEMENTS).json()
  }

  async getUserAdvancementsApi(username: string): Promise<GetUserAdvancementsApiT> {
    return api.get(`${FetchEndpoint.USER_ADVANCEMENTS}/${username}`).json()
  }
}

export default new Advancements()
