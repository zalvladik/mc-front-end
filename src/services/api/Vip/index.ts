import { api } from 'src/configs/ky'
import { FetchEndpoint } from 'src/constants'
import type { VipEnum } from 'src/types'

class Vip {
  async byeVip(vip: VipEnum): Promise<void> {
    await api.post(FetchEndpoint.USER_VIP, { json: { vip } }).json()
  }

  async upgradeVip(vip: VipEnum): Promise<void> {
    await api.put(FetchEndpoint.USER_VIP, { json: { vip } }).json()
  }
}

export default new Vip()
