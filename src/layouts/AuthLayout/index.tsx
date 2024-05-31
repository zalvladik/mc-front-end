import { Outlet } from 'react-router-dom'

import UserProvider from 'src/contexts/UserProvider'

import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useGetUser } from 'src/hooks/useGetUser'

const AuthLayout = (): JSX.Element => {
  const { isLoading, isSuccess } = useCheckAuth()

  const { isUserLoading, user } = useGetUser(isSuccess)

  if (isLoading || isUserLoading) return <div>Loading...</div>

  return (
    <UserProvider user={user}>
      <Outlet />
    </UserProvider>
  )
}

export default AuthLayout
