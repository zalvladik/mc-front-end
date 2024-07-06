import type { Role } from 'src/constants'

export type UserT = {
  id: number
  username: string
  money: number
  role: Role[]
  shulkerCount: number
  itemCount: number
  lotCount: number
}

export type UserContextDataT = {
  user: UserT
  updateUserMoney: (value: number) => void
}
