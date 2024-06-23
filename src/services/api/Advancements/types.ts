export type GetAllUsersAdvancementsT = {
  id: string
  username: string
  rating: number
}

export type GetUserAdvancementsApiT = {
  id: string
  username: string
  rating: number
  advancements: string[] | null
}
