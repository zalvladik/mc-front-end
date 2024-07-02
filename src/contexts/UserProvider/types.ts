import type { Role } from 'src/constants'

export type UserT = {
  id: number
  username: string
  money: number
  role: Role[]
  countShulker: number
  countLot: number
}

export type UserContextDataT = {
  user: UserT
  updateUserMoney: (value: number) => void
}
