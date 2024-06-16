import type { HTMLProps } from 'react'

export type AuctionCategoryProps = {
  setSelectedCaterogy: (value: string) => void
  selectedCaterogy: string
} & HTMLProps<HTMLDivElement>

export type ButtonItemsProps = {
  isSelected: boolean
}

export type ButtonCategoryProps = {
  isSelected: boolean
}
