import { Outlet } from 'react-router-dom'
import SocketLayout from 'src//layouts/SocketLayout'
import UserProvider from 'src/contexts/UserProvider'
import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useGetUser } from 'src/hooks/useGetUser'
import LoadingPage from 'src/pages/LoadingPage'

const AuthLayout = (): JSX.Element | null => {
  const { isLoading, isSuccess } = useCheckAuth()

  const { isUserLoading, user } = useGetUser(isSuccess)

  if (isLoading || isUserLoading) return <LoadingPage />

  return (
    <UserProvider user={user}>
      <SocketLayout>
        <Outlet />
      </SocketLayout>
    </UserProvider>
  )
}

export default AuthLayout
