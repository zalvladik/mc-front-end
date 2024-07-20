import { useEffect, useMemo, useState } from 'react'
import { useQueryClient } from 'react-query'
import { CacheKeys, defaultUser } from 'src/constants'
import { UserContext } from 'src/contexts'
import type {
  UpdateUserT,
  UserContextDataT,
  UserT,
} from 'src/contexts/UserProvider/types'
import { SocketApi } from 'src/services/api/Socket'
import type { UserResponseT } from 'src/services/api/User/types'
import type { ReactChildrenT } from 'src/types'

type UserProviderT = {
  user: UserT
} & ReactChildrenT

const UserProvider = ({
  children,
  user: initialUser,
}: UserProviderT): JSX.Element => {
  const [user, setUser] = useState<UserT>(initialUser)
  const queryClient = useQueryClient()

  const queryData = queryClient.getQueriesData<UserResponseT>(CacheKeys.USER)
  const userData = queryData.length ? queryData[0][1] : defaultUser

  useEffect(() => {
    if (userData.id) {
      setUser(userData)
    }
  }, [userData])

  const updateUserMoney = (money: number): void => {
    setUser(prevUser => ({ ...prevUser, money }))
  }

  const incrementUserMoney = (dataMoney: number): void => {
    setUser(prevUser => ({ ...prevUser, money: prevUser.money + dataMoney }))
  }

  const decrementUserMoney = (dataMoney: number): void => {
    setUser(prevUser => ({ ...prevUser, money: prevUser.money - dataMoney }))
  }

  const updateUser = ({
    id,
    username,
    money,
    role,
    vip,
    vipExpirationDate,
  }: UpdateUserT): void => {
    const updatedUser = { ...user }

    if (id !== undefined) updatedUser.id = id

    if (username !== undefined) updatedUser.username = username

    if (money !== undefined) updatedUser.money = money

    if (role !== undefined) updatedUser.role = role

    if (vip !== undefined) updatedUser.vip = vip

    if (vipExpirationDate !== undefined)
      updatedUser.vipExpirationDate = vipExpirationDate

    setUser(updatedUser)
  }

  const providerValue: UserContextDataT = useMemo(
    () => ({ user, updateUserMoney, updateUser }),
    [user],
  )

  useEffect(() => {
    if (!user.username) return

    SocketApi.createConnection({
      username: user.username,
      incrementUserMoney,
      decrementUserMoney,
      queryClient,
    })
  }, [user.username])

  return (
    <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
  )
}

export default UserProvider
