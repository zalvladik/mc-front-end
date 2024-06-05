import type { HTMLProps } from 'react'

export type InventoryHeaderProps = {
  isLoadingGetInventory: boolean
  refetch: () => void
  putItemsFromInventory?: () => void
} & HTMLProps<HTMLDivElement>
