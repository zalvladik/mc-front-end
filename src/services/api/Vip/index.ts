import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { UserResponseT } from 'src/services/api/User/types'
import type { VipEnum } from 'src/types'

class Vip {
  async byeVip(vip: VipEnum): Promise<UserResponseT> {
    return api.post(FetchEndpoint.USER_VIP, { json: { vip } }).json()
  }

  async update(vip: VipEnum): Promise<UserResponseT> {
    return api.put(FetchEndpoint.USER_VIP, { json: { vip } }).json()
  }
}

export default new Vip()
