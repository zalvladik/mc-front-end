import type { QueryClient } from 'react-query'

export type CreateConnectionProps = {
  username: string
  incrementUserMoney: (value: number) => void
  decrementUserMoney: (value: number) => void
  queryClient: QueryClient
}
