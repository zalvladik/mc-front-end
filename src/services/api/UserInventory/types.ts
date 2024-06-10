export type ItemT = {
  id: number
  amount: number
  type: string
  display_name: string
  description: string[] | null
  categories: string[]
}

export type ItemTicketT = {
  id: number
  items: number[]
}

export type UserInventoryT = {
  id: number
  realname: string
  money: number
  items: ItemT[]
  itemTickets: ItemTicketT[]
}

export type UserMoneyT = {
  money: number
}
