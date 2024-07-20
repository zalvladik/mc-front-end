import { Outlet } from 'react-router-dom'
import UserProvider from 'src/contexts/UserProvider'
import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useGetUser } from 'src/hooks/useGetUser'
import LoadingPage from 'src/pages/LoadingPage'

const AuthLayout = (): JSX.Element | null => {
  // if (isLoading || isUserLoading) return <LoadingPage />

  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  )
}

export default AuthLayout
