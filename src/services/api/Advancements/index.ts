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

  async getUserAdvancementsApi(realname: string): Promise<GetUserAdvancementsApiT> {
    return api.get(`${FetchEndpoint.USER_ADVANCEMENTS}/${realname}`).json()
  }
}

export default new Advancements()
