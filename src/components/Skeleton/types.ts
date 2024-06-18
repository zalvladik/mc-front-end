import type { HTMLProps } from 'react'

export type SkeletonProps = {
  size?: number
  skeletonLength?: number
  isDataExist: number
  isLoading: boolean | number
  emptyText: string
} & HTMLProps<HTMLDivElement>
