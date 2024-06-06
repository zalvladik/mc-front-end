import type { HTMLProps } from 'react'

export type InventoryHeaderProps = {
  isLoading?: boolean
  refetch?: () => void
  submitButton: () => void
  buttonText: string
  title: string
  itemsLength: number
} & HTMLProps<HTMLDivElement>
