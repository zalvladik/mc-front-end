import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { CreateLotProps, LotT } from 'src/services/api/Lot/types'

class Lot {
  async post(body: CreateLotProps): Promise<LotT> {
    return api
      .post(FetchEndpoint.LOT, {
        json: body,
      })
      .json()
  }
}

export default new Lot()
