export type ItemT = {
  id: number
  amount: number
  type: string
  display_name: string
  description: string[] | null
  enchants: string[] | null
  durability: string | null
  categories: string[]
}

export type ItemTicketT = {
  id: number
  items: number[]
}

export type UserMoneyT = {
  money: number
}
