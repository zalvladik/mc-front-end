import type { HTMLProps } from 'react'

export type ItemHoverDescriptionProps = {
  durability: string | null
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
  'description' | 'title' | 'durability'
>

export type IsJsonItemT = {
  text: string
  backdown?: number
  color: string
  textShadow?: string
}
