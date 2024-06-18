import type { HTMLProps } from 'react'

export type DefaultButtonProps = {
  isVisible?: boolean
  isLoading?: boolean
} & HTMLProps<HTMLDivElement>
