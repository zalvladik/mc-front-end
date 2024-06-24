import type { HTMLProps } from 'react'

export type ItemHoverDescriptionProps = {
  description: string[] | null
  title: string
  isVisible: boolean
  topSlotIcon?: number
  leftSlotIcon?: number
  heightSlotIcon?: number
  widthSlotIcon?: number
} & HTMLProps<HTMLDivElement>

export type useItemHoverDescriptionProps = Omit<
  ItemHoverDescriptionProps,
  'description' | 'title'
>

export type IsJsonItemT = {
  text: string
  backdown?: number
  color: string
  textShadow?: string
}
