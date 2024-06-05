import { useMemo } from 'react'
import { UserContext } from 'src/contexts'
import type { UserContextDataT } from 'src/contexts/UserProvider/types'
import type { ReactChildrenT } from 'src/types'

type UserProviderT = {
  user: any
} & ReactChildrenT

const UserProvider = ({ children, user }: UserProviderT): JSX.Element => {
  const providerValue: UserContextDataT = useMemo(() => ({ user }), [user])

  return (
    <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
  )
}

export default UserProvider
