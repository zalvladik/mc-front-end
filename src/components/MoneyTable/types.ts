import type { HTMLProps } from 'react'

export type MoneyTableProps = {
  moneyTitle?: string
  anotherMoney?: number
} & HTMLProps<HTMLUListElement>
