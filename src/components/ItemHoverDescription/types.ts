import type { HTMLProps } from 'react'

export type ItemHoverDescriptionProps = {
  description: string[] | null
  title: string
  isVisible: boolean
} & HTMLProps<HTMLDivElement>

export type IsJsonItemT = {
  text: string
  backdown?: number
  color: string
  textShadow?: string
}
