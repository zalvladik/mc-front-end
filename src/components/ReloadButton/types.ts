import type { HTMLProps } from 'react'

export type ReloadButonProps = {
  refetch: () => void
  isLoading: boolean
  message: string
} & HTMLProps<HTMLDivElement>

export type StyledContainerProps = {
  isLoading: boolean
}
