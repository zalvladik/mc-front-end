import type { HTMLProps } from 'react'

export type PaginationTabProps = {
  page: number
  maxPage: number
  setPage: (value: number) => void
} & HTMLProps<HTMLDivElement>
