import { useContext } from 'react'
import { UserContext } from 'src/contexts'
import type { UserContextDataT } from 'src/contexts/UserProvider/types'

export const useUser = (): UserContextDataT => {
  const data = useContext(UserContext)

  if (!data) {
    throw new Error('useUser was used outside of its Provider')
  }

  return data
}
