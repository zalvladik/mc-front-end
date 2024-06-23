import { useMemo, useState } from 'react'
import { UserContext } from 'src/contexts'
import type { UserContextDataT, UserT } from 'src/contexts/UserProvider/types'
import type { ReactChildrenT } from 'src/types'

type UserProviderT = {
  user: UserT
} & ReactChildrenT

const UserProvider = ({
  children,
  user: initialUser,
}: UserProviderT): JSX.Element => {
  const [user, setUser] = useState<UserT>(initialUser)

  const updateUserMoney = (money: number): void => {
    setUser(prevUser => ({ ...prevUser, money }))
  }

  const providerValue: UserContextDataT = useMemo(
    () => ({ user, updateUserMoney }),
    [user],
  )

  return (
    <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
  )
}

export default UserProvider
