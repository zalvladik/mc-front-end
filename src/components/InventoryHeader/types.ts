import type { HTMLProps } from 'react'

export type InventoryHeaderProps = {
  isLoading?: boolean
  submitButton?: () => void
  buttonText: string
  title: string
  itemsLength: number
} & HTMLProps<HTMLDivElement>
