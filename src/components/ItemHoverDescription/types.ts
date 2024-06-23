import type { HTMLProps } from 'react'

export type ItemHoverDescriptionProps = {
  description: string[] | null
  title: string
  isVisible: boolean
  topSlotIcon: number
  leftSlotIcon: number
  heightSlotIcon: number
} & HTMLProps<HTMLDivElement>

export type useItemHoverDescriptionProps = Pick<
  ItemHoverDescriptionProps,
  'isVisible' | 'topSlotIcon' | 'leftSlotIcon' | 'heightSlotIcon'
>

export type IsJsonItemT = {
  text: string
  backdown?: number
  color: string
  textShadow?: string
}
