import type { Role } from 'src/constants'

export type UserT = {
  id: number
  realname: string
  lastlogin: string
  userInventory: number
  advancements: number
  role: Role[]
}

export type UserContextDataT = {
  user: UserT
}
