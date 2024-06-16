import type { HTMLProps } from 'react'

export type StyledPageProps = {
  isCurrentPage: boolean
}

export type AuctionPaginationProps = {
  currentPage: number
  totalPages: number
  setCurrentPage: (value: number) => void
} & HTMLProps<HTMLDivElement>

export type IsDisabledButtonProps = {
  disabled: boolean
}
