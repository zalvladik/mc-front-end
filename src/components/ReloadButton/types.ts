import type { HTMLProps } from 'react'

export type ReloadButonProps = {
  refetch: () => void
  isLoading: boolean
} & HTMLProps<HTMLDivElement>
