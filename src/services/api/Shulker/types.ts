export type ShulkerItemT = {
  id: number
  amount: number
  type: string
  display_name: string
  description: string[] | null
  enchants: string[] | null
  durability: string | null
  categories: string[]
}

export type ShulkerT = {
  id: number
  display_name: string
  type: string
  shulkerItems: ShulkerItemT[]
}
