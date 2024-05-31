export type GetAllUsersApiT = {
  id: string
  realname: string
  rating: number
}

export type GetUserAdvancementsApiT = {
  id: string
  realname: string
  rating: number
  advancements: string[]
}
