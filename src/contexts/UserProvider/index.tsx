import { useEffect, useMemo, useState } from 'react'
import { UserContext } from 'src/contexts'
import type { UserContextDataT, UserT } from 'src/contexts/UserProvider/types'
import { SocketApi } from 'src/services/api/Socket'
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

  const incrementUserMoney = (dataMoney: number): void => {
    setUser(prevUser => ({ ...prevUser, money: prevUser.money + dataMoney }))
  }

  const decrementUserMoney = (dataMoney: number): void => {
    setUser(prevUser => ({ ...prevUser, money: prevUser.money - dataMoney }))
  }

  const providerValue: UserContextDataT = useMemo(
    () => ({ user, updateUserMoney }),
    [user],
  )

  useEffect(() => {
    if (!user.username) return

    SocketApi.createConnection({
      username: user.username,
      incrementUserMoney,
      decrementUserMoney,
    })
  }, [user.username])

  return (
    <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
  )
}

export default UserProvider
