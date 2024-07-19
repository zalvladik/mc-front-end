import type { Role } from 'src/constants'
import type { VipEnum } from 'src/types'

export type UserT = {
  id: number
  username: string
  money: number
  role: Role[]
  vip: VipEnum | null
  vipExpirationDate: Date | null
}

export type UpdateUserT = Partial<UserT>

export type UserContextDataT = {
  user: UserT
  updateUserMoney: (value: number) => void
  updateUser: (value: UpdateUserT) => void
}
