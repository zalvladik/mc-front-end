export type UserT = {
  id: number
  realname: string
  lastlogin: string
  userInventory: number
  advancements: number
}

export type UserContextDataT = {
  user: UserT
}
