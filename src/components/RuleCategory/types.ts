import type { HTMLProps } from 'react'

export type RuleCategoryProps = {
  category: string
  rules: string[]
  categoryNum: number
} & HTMLProps<HTMLDivElement>
