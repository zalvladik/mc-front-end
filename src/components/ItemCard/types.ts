import type { HTMLProps } from 'react'

export type ItemCardProps = {
  description: string[] | null
  title: string
} & HTMLProps<HTMLDivElement>

export type IsJsonItemT = {
  text: string
  backdown?: number
  color: string
  textShadow?: string
}
