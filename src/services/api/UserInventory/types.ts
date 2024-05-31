export type ItemT = {
  id: number
  amount: number
  type: string
  display_name: string
  description?: string[]
  categories: string[]
  serialized: string
}

export type TradeTokenT = {
  id: number
  items: ItemT[]
}

export type UserInventoryT = {
  id: number
  realname: string
  money: number
  items: ItemT[]
  tradeTokens: TradeTokenT[]
}
