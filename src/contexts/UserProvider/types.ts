import type { Role } from 'src/constants'

export type UserT = {
  id: number
  username: string
  money: number
  role: Role[]
}

export type UserContextDataT = {
  user: UserT
  updateUserMoney: (money: number) => void
}
